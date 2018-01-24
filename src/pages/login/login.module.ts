import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SharedModule } from "../../shared/shared.module";
import { AjaxManagerService } from "../../core/services/ajax-manager.service";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    SharedModule,
  ]
})
export class LoginPageModule {}
