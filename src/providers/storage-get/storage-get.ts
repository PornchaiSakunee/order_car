import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageGetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageGetProvider {

  constructor(public storage:Storage) {
    console.log('Hello StorageGetProvider Provider');
    
  }
  
  // storage_get(key:string){
 
  //   return new Promise(resolve => { this.storage.get('set_fist_time').then((val) => {
  //     console.log(val);
  //     resolve(val);
 
  //   });
  // });
    
  // }

  // getMovieItems() {
  //   return new Promise(resolve => {
  //     this.storage.get('storageMovieCollection').then((data) => {
  //       resolve(data);
  //     });
  //   })
  // }

}
