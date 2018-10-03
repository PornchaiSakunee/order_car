import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { StorageGetProvider } from "../storage-get/storage-get";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

 
  baseUrl: string = "https://intranet.spi.co.th/booking_car/service/"

  constructor(
    private httpClient: HttpClient,
    public storage: Storage,
    public storageGetProvider: StorageGetProvider
  ) {
    console.log('Hello LoginProvider Provider');
  }
  
  loginService(username: string, password: string) {

    ////login.ts
    return new Promise(resolve => {
      this.httpClient.post(this.baseUrl + 'login.php', { 'username': username, 'password': password }).subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }



}
