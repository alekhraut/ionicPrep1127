import { Inject,Injectable } from "@angular/core";
import { ConfigurationService } from "ionic-configuration-service";

@Injectable()
export class AppConfig{
    
    apiUrl = "";
    
    constructor(private confService:ConfigurationService){
        // let api = this.confService.getValue('api')
        // let protocol = api["protocol"]
        // let host = api["host"]
        // let port = api["port"]
        // let suffix = api["suffix"]
        
        // if(port && port.trim() !== ''){
        //     this.apiUrl = protocol + "://" + host + ":" + port + suffix
        // }else{
        //     this.apiUrl = protocol + "://" + host + suffix
        // }
        // this.apiUrl = "http://10.1.14.118:8080/zs-prp-web/api/v1/";
        this.apiUrl = "https://prp-int-reg.dev.zsservices.com/zs-prp-web/api/v1/"
        console.log('completeurl ->' + this.apiUrl)
    }

    // getApiUrl(): string{
    //     return this.apiUrl;
    // }

    public getApiUrl(apiPath: string): string {
      return this.apiUrl + apiPath
    }
}