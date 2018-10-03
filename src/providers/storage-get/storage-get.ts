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

  public set_emp_code:string;
  public set_emp_Fname:string = "pornchai";
  public set_emp_Lname:string;

  constructor(public storage:Storage) {
    console.log('Hello StorageGetProvider Provider');
    this.storage_set();
    
  }
  
  storage_set(){

    this.storage.get('set_emp_code').then((val) => {
      this.set_emp_code= val ;
    });

    this.storage.get('set_emp_Fname').then((val) => {
      this.set_emp_Fname= val ;
    });
    this.storage.get('set_emp_Lname').then((val) => {
      this.set_emp_Lname= val ;
    });


    
  }

  storage_get(){
      return this.set_emp_Fname
  }
  

  // getMovieItems() {
  //   return new Promise(resolve => {
  //     this.storage.get('storageMovieCollection').then((data) => {
  //       resolve(data);
  //     });
  //   })
  // }

}
