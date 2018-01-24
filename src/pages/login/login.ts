import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjaxManagerService } from '../../core/services/ajax-manager.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../app/app.config';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { MenuController, LoadingController } from "ionic-angular";
import { AuthService } from "../../core/services/auth.service"
import { GlobalService } from '../../core/services/global.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any = {}
  
  loginForm:FormGroup;

  useremail = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private translate: TranslateService,
    private ajaxManager:AjaxManagerService, private appConfig:AppConfig,private formBuilder: FormBuilder,
    private loadingCtrl:LoadingController, private authService:AuthService, private globalService:GlobalService) {
  
    this.loginForm = formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // this.authService.getCSRFToken().subscribe(data => { });
    // this.ajaxManager.get("","")
  }

  moveToSettings(){
    this.navCtrl.push('SettingsPage')
  }

  moveToProfile(){
    this.navCtrl.push('ProfilePage')
  }

  login(){
    let user = {username:"GE0.8106070781661803@testmail.com",password:"Test1234"}
    // this.navCtrl.setRoot('HomePage');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.authService.testApi().subscribe(data => {
      loading.dismiss();
      alert(JSON.stringify(data))
     // loading.dismiss();
    }, error => {
      loading.dismiss();
      alert(JSON.stringify(error));
    })
  //   this.authService.getCSRFToken().subscribe(data => {

  //     this.authService.login(user).subscribe(data => {console.log('in login');
  //     loading.dismiss();
  //     alert("Service")
  //   },
  // error => {
  //   loading.dismiss();
  //   alert("Service error"+ JSON.stringify(error)) 
  // });
  //    },
  //    error => {
  //      loading.dismiss();
  //      alert("Service csrf error"+ JSON.stringify(error))
  //    });
    // this.authService.login(user).subscribe(
    // // this.("login").subscribe(
    //   data => {
    //     console.log('response ===>',data);
    //     setTimeout(() => {
    //       loading.dismiss();
    //       // this.loginInProgress = false;
    //       this.globalService.setCurrentUser(data);
    //       this.useremail = data.email;
    //       this.authService.setLoginStatus(this.globalService.userExists());
    //       // this.authService.triggerReloadInAllTabs();
    //       // this.navigateToRoute();
    //       this.navCtrl.setRoot('HomePage');
    //     }, 1000);
    //   },
    //   error => {
    //     console.log('error => ', error)
    //   }
    // )
  }
}
