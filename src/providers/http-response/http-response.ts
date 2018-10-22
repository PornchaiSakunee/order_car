import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the HttpResponseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpResponseProvider {

  baseUrl: string = "https://intranet.spi.co.th/booking_car/service/"

  constructor( private httpClient: HttpClient) {
    console.log('Hello HttpResponseProvider Provider');
  }

   HTTPService(url: string,  data_:{}) {

    ////login.ts
    return new Promise(resolve => {
      this.httpClient.post(this.baseUrl +url,data_).subscribe(data => {

        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

}
