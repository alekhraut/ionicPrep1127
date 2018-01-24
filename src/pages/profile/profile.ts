import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  selectedTab;
  infoTab;
  medTab;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService) {

      translate.get(['profile.myinformation','profile.mymedication']).subscribe(translations => {
        this.infoTab = translations['profile.myinformation'];
        this.medTab = translations['profile.mymedication'];
      });

      this.selectedTab = this.infoTab;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  segmentChanged(value){

  }
}
