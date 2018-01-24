import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AppConstantService } from "../../core/services/appconstant.sevice";
import { AuthService } from "../../core/services/auth.service"

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  slidesnames = [];
  
  selectedSlide:any;

  percentatge = 63;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, private authService:AuthService) {
    this.selectedSlide = 0;
    this.translate.get(['landing.summary','landing.diarycompletion','landing.questionnaire','landing.toptriggers','landing.biosamplesummary']).subscribe(data =>{
      this.slidesnames.push(data['landing.summary']);
      this.slidesnames.push(data['landing.diarycompletion']);
      this.slidesnames.push(data['landing.questionnaire']);
      this.slidesnames.push(data['landing.toptriggers']);
      this.slidesnames.push(data['landing.biosamplesummary']);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  //   this.authService.sessionDetails().subscribe(
  //     data => {
  //         console.log('data session details ',data);
  //     },
  //     error => {
  //         console.log('error ',error)
  //     }
  // )
  }

  slideChanged(){
    this.selectedSlide = this.slides.getActiveIndex();
    // console.log('Current index is', this.selectedSlide);
  }

  openQuestionnaire(){
    console.log('Questionnaire...')
    this.navCtrl.setRoot(AppConstantService.questionnairepage)
  }
}
