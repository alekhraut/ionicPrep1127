import { Injectable } from '@angular/core';
// import { SessionStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/* Models */
import { User } from '../models/user';
import { TranslateService } from '@ngx-translate/core';

export function getStoragePrefixKey(): string {
  return document.location.hostname + '_';
}

export const sessionLoggedInKey = getStoragePrefixKey() + 'userLoggedIn';

/**
 * A service class to hold all application global properties. 
 * 
 * @export
 * @class GlobalService
 */
@Injectable()
export class GlobalService {

  private currentUser: User;
  // Boolean for session storage to keep track if user is logged in or not
  private _isUserLoggedIn: boolean;
  private subject = new Subject<any>();

  constructor(
    // private session: SessionStorageService,
    private translate: TranslateService
  ) {
    this._isUserLoggedIn = false;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    this._isUserLoggedIn = true;
    // this.session.store(sessionLoggedInKey, this._isUserLoggedIn);
    this.translate.use(this.getCurrentUser().locale);
  }

  isUserLoggedIn() {
    // this._isUserLoggedIn = this.session.retrieve(sessionLoggedInKey);
    return this._isUserLoggedIn;
  }

  clearUser() {
    // this.session.clear(sessionLoggedInKey);
    this.currentUser = null;
  }

  userExists(): boolean {
    if (this.getCurrentUser() == null) {
      return false;
    } else {
      return true;
    }
  }
}
