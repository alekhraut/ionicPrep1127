import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class AjaxManagerService {

    constructor(private httpClient:HttpClient){}

    public get(url:string, options?:any): Observable<any>{
        return this.httpClient.get(url,options);
    }

    public post(url:string, body:any, options?:any): Observable<any>{
        return this.httpClient.post(url, body, options);
    }

    public getLocal(type:string): Observable<any>{
        switch(type){
            case 'login':
                return this.httpClient.get("../../assets/response/login.json");
        }
        return null;
    }

}