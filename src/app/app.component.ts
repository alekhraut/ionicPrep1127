import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from "@ngx-translate/core";
import { AppConstantService } from "../core/services/appconstant.sevice";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage:any = 'HomePage';
  rootPage:any = 'LoginPage'
  
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    translateService: TranslateService) {
    platform.ready().then(() => {
      translateService.setDefaultLang('en')
      translateService.use('en');

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      translateService.get(['sidemenu.home','sidemenu.diary','sidemenu.symptomhistory','sidemenu.questionnaire','sidemenu.faqs',
      'sidemenu.contact','sidemenu.logout']).subscribe(
        translated => {
            this.pages = [
              {title: translated['sidemenu.home'], component: AppConstantService.homepage},
              {title: translated['sidemenu.diary'], component: null},
              {title: translated['sidemenu.symptomhistory'], component: null},
              {title: translated['sidemenu.questionnaire'], component: AppConstantService.questionnairepage},
              {title: translated['sidemenu.faqs'], component: null},
              {title: translated['sidemenu.contact'], component: null},
              {title: translated['sidemenu.logout'], component: AppConstantService.loginpage},
            ];
        }
      )
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component !== null){
      this.nav.setRoot(page.component);
    }
  }

  openProfilePage(){
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(AppConstantService.profilepage);
  }
}

