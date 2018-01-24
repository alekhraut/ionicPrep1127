
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { APP_INITIALIZER } from "@angular/core";
import { ConfigurationService } from "ionic-configuration-service";
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CookieXSRFStrategy, XSRFStrategy } from '@angular/http';
import { CoreModule } from "../core/core.module";
import { AppConfig } from './app.config';

import { Pro } from '@ionic/pro';

// These are the imports required for the code below,
// feel free to merge into existing imports.
//\\ import { ErrorHandler, Injectable, Injector } from '@angular/core';
// import { IonicErrorHandler } from 'ionic-angular';

const IonicPro = Pro.init('f6e4c431', {
  appVersion: "0.0.1"
});

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure 
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
export function loadConfiguration(configurationService: ConfigurationService){
  return () => configurationService.load("assets/settings.json");
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    CoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfiguration,
      deps: [ConfigurationService],
      multi: true
    },
    AppConfig,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: ErrorHandler, useClass: MyErrorHandler },
    { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('myCookieName', 'X-CSRF-TOKEN')}
  ]
})
export class AppModule {}

