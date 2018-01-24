import { NgModule } from '@angular/core';
import { AjaxManagerService } from './services/ajax-manager.service';

import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule,TranslateLoader, TranslateService  } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// import { HttpModule,Http } from "@angular/http";
import { AppConstantService } from "../core/services/appconstant.sevice";
import { AppConfig } from "../app/app.config";
import { AuthService } from "./services/auth.service";
import { AuthInterceptor } from "./services/auth-intercepter.service";
import { GlobalService } from './services/global.service';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}

@NgModule({
    declarations: [
    ],
    imports: [
      HttpClientModule,
      TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (createTranslateLoader),
        deps:[HttpClient]
      }
    }),
    ],
    providers:[
      AjaxManagerService,
      AppConstantService,
      AppConfig,
      AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
      GlobalService
    ]
  })

export class CoreModule {
    
}