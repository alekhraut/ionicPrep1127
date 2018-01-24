import { Injectable } from '@angular/core'
import { AppConfig } from "../../app/app.config";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppConstantService{

    public static readonly homepage: string = "HomePage";
    public static readonly loginpage: string = "LoginPage";
    public static readonly profilepage: string = "ProfilePage";
    public static readonly questionnairepage: string = "QuestionnairePage";
    public static readonly csrf_token = 'csrf-token';
}