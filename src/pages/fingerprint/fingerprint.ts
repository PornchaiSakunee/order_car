import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FingerprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint',
  templateUrl: 'fingerprint.html',
})
export class FingerprintPage {

  pincode:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('set_pin_id').then((val_pin_code) => {
      console.log('pin'+val_pin_code);
      
      this.pincode = val_pin_code ;
    });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
  }

}
