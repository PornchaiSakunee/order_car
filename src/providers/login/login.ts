import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from  '@angular/common/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  baseUrl:string="http://localhost/ocr/service/"

  constructor(private  httpClient : HttpClient,public storage:Storage) {
    console.log('Hello LoginProvider Provider');
  }
 
  checkLogin(titlesset:string):any{
    this.storage.get(titlesset).then((val) => {
      return val
    });
  }

  // //เช็คล็อกอิรครั้งแรก
  // firstTime(){
  //   this.storage.get('age').then((val) => {

  //     if(){

  //     }
  //     console.log('Your age is', val);
  //   });
  // }
  
  loginService(username:string,password:string){
 
     ////login.ts
     return new Promise(resolve => {
      this.httpClient.post(this.baseUrl+'login.php',{'username':username,'password':password}).subscribe(data => {
        
        resolve(data);
        
      }, err => {
        console.log(err);
      });
    });
  }

}
