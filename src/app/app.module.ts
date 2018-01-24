
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { APP_INITIALIZER } from "@angular/core";
import { ConfigurationService } from "ionic-configuration-service";
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from "../core/core.module";
import { AppConfig } from './app.config';


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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
