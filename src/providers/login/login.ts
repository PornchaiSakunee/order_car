import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from  '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  baseUrl:string="http://localhost/ocr/service/"

  constructor(private  httpClient : HttpClient) {
    console.log('Hello LoginProvider Provider');
  }
  
  loginService(username:string,password:string){
     this.httpClient.post(this.baseUrl+'login.php',{'username':username,'password':password}).subscribe(res => {
        console.log(res);
     });
  }

}
