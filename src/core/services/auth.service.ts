import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Router } from '@angular/router';

/* Models */
import { User } from '../models/user';

/* User Services */
import { AjaxManagerService } from '../../core/services/ajax-manager.service';
import { ApiConstants } from './api-constants.service';
import { AppConfig } from '../../app/app.config';
import { GlobalService, sessionLoggedInKey, getStoragePrefixKey } from './global.service';

// import { MdSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
// import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

const localLogoutTriggerKey = getStoragePrefixKey() + 'localLogoutTrigger';
const localReloadAllTriggerKey = getStoragePrefixKey() + 'localReloadAllTrigger';

/**
 * Service to handle all user authentication related functions.
 * 
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

  private authenticated = false;
  private user: User;
  private reloadThisTab = true;

  constructor(private ajaxManagerService: AjaxManagerService,
    private appConfig: AppConfig,
    private globalService: GlobalService,
    // private localStorage: LocalStorageService,
    // private sessionStorage: SessionStorageService,
    // private router: Router,
    // public snackBar: MdSnackBar,
    private translate: TranslateService) {
    // this.localStorage
    //   .observe(localLogoutTriggerKey)
    //   .asObservable()
    //   .subscribe(
    //   data => {
    //     if (this.sessionStorage.retrieve(sessionLoggedInKey) != null) {
    //       window.location.reload();
    //     }
    //   }
    //   );

    // this.localStorage
    //   .observe(localReloadAllTriggerKey)
    //   .asObservable()
    //   .subscribe(
    //   data => {
    //     if (this.reloadThisTab && (data != null)) {
    //       window.location.reload();
    //     }
    //   }
    //   );
  }
  getCSRFToken() {
    return this.ajaxManagerService.get(this.appConfig.getApiUrl(ApiConstants.csrf_token));
  }
  public login(user: any): Observable<User> {
    const body = 'Basic ' + btoa(user['username'] + ':' + user['password']);
    return this.ajaxManagerService.post(this.appConfig.getApiUrl(ApiConstants.login), body);
  }

  public logout() {
    if (this.globalService.getCurrentUser()) {
      this.ajaxManagerService.post(
        this.appConfig.getApiUrl(ApiConstants.logout),
        ''
      )
        .subscribe(
        data => {
          if (data.status === 200) {
            this.translate.get(['loginUser.logoutSuccess', 'common.ok']).subscribe(translatedKey => {
              this.openSnackBar(
                translatedKey[Object.keys(translatedKey)[0]],
                translatedKey[Object.keys(translatedKey)[1]]
              );
            });
          }
          this.globalService.clearUser();
          this.setLoginStatus(this.globalService.userExists());
          // this.logoutAllTabs();
          // window.location.reload();
        },
        error => {
          this.globalService.clearUser();
          this.setLoginStatus(this.globalService.userExists());
          // window.location.reload();
        }
        );
    } else {
      this.globalService.clearUser();
    //   this.router.navigate(['login']);
      this.logoutAllTabs();
    }
  }

  /**
   * Check if boolean variable in sesssion storage is set, for user logged in,
   * Not if user object is null.
   */
  public isLoggedIn(): boolean {
    // return this.authenticated;
    // return this.globalService.userExists(); 
    return this.globalService.isUserLoggedIn();
  }

  public setLoginStatus(status: boolean) {
    this.authenticated = status;
  }

  openSnackBar(message: string, action: string) {
    // this.snackBar.open(message, action, {
    //   duration: 3000,
    // });
  }

  private logoutAllTabs() {
    // this.localStorage.store(
    //   localLogoutTriggerKey,
    //   !this.localStorage.retrieve(localLogoutTriggerKey)
    // );
  }

  public triggerReloadInAllTabs() {
    this.reloadThisTab = false;
    // this.localStorage.store(
    //   localReloadAllTriggerKey,
    //   !this.localStorage.retrieve(localReloadAllTriggerKey)
    // );
  }

  public logoutOnPasswordPages() {
    this.ajaxManagerService.post(
      this.appConfig.getApiUrl(ApiConstants.logout),
      ''
    ).subscribe(
      loginSuccess => {
        this.logoutAllTabs();
      },
      loginError => { }
      );
  }
}



// import { Injectable } from '@angular/core'
// import { AppConfig } from "../../app/app.config";
// import { Observable } from 'rxjs/Observable';
// import { AjaxManagerService } from '../services/ajax-manager.service'
// import { ApiConstants } from '../services/api-constants.service';

// @Injectable()
// export class AuthService{

//     constructor(private appConfig: AppConfig, private ajaxmanager:AjaxManagerService){}

//     public login(user:any):Observable<any>{ 
//         const body = 'Basic' + btoa(user['username'] + ':' + user['password']);
//         return this.ajaxmanager.post(this.appConfig.getApiUrl(ApiConstants.login),body)
//     }

//     getCSRFToken() {
//         return this.ajaxmanager.get(this.appConfig.getApiUrl(ApiConstants.csrf_token));
//     }

//     logout(){
        
//     }

//     checkMRNAvailability(mrn) {
//         const url = this.appConfig.getApiUrl(ApiConstants.sitestaff + '/1/' + 'check-duplicate' + '/' + mrn);
//         return this.ajaxmanager.get(url);
//     }

//     sessionDetails(){
//         const url = this.appConfig.getApiUrl('session-details');
//         return this.ajaxmanager.post(url,"");
//     }
// }