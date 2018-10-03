import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-pin',
  templateUrl: 'login-pin.html',
})
export class LoginPinPage {

  passcode: any;
  pageStatus: any;
  codeone: any;
  codetwo: any;
  codethree: any;
  codefour: any;
  int: any;
  newPincount: any;
  message: any;
  finalPin: any;
  fingerPin: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {



    this.passcode = '';
    this.finalPin = '';
    this.message = true;
    this.pageStatus = "Enter Pin"
    this.int = 0;
    this.newPincount = 0;
    this.fingerPin = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPinPage');
  }

  check_pin_(value) {
    if (this.passcode.length < 4) {
      this.passcode = this.passcode + value;

      if (this.int == 0) {
        this.codeone = value;
        this.int++
      } else if (this.int == 1) {
        this.codetwo = value;
        this.int++
      } else if (this.int == 2) {
        this.codethree = value;
        this.int++
      } else if (this.int == 3) {
        this.codefour = value;
        this.int++
      }

      // if (this.passcode.length == 4) {
      //   this.storage.get('set_pin_id').then((data_pin_id) => {
    
     
      //     if(data_pin_id == this.passcode ){
      //       //  ถ้ามีการตั้งค่าเป็น
      //       this.navCtrl.setRoot(HomePage);
      //      }
      //     //  else{
      //     //   this.rootPage = LoginPage
      //     //  }
      //   },(error)=>{
      //      console.log(error);
           
      //   });
      // }
    }
  }


  check_pin(value) {


      if (this.passcode.length < 4) {
        this.passcode = this.passcode + value;
        if (this.int == 0) {
          this.codeone = value;
          this.int++
        } else if (this.int == 1) {
          this.codetwo = value;
          this.int++
        } else if (this.int == 2) {
          this.codethree = value;
          this.int++
        } else if (this.int == 3) {
          this.codefour = value;
          this.int++
        }
        
          if (this.passcode.length == 4) {
        this.storage.get('set_pin_id').then((data_pin_id) => {
    
         //  ถ้าpin ตรงกัน ไปที่หน้า home
          if(data_pin_id == this.passcode ){
            this.message = true;
            this.navCtrl.setRoot(HomePage);
           }
           else{
            this.message = false;
            // this.rootPage = LoginPage
           }
        },(error)=>{
           console.log(error);
           
        });
      }


        // if (this.passcode.length == 4) {
        //   if (this.newPincount > 0) {
        //     if (this.finalPin == this.codeone + this.codetwo + this.codethree + this.codefour) {
        //       this.navCtrl.setRoot(HomePage).then(() => {
        //         //ถ้าตั้ง pin สำเร็จ ให้ set pin id 
        //         this.storage.set('set_pin_id', this.finalPin)
        //       });



        //       console.log("passwordMatched")
        //       this.message = true;
        //     } else {
        //       this.message = false;
        //     }
        //   } else {
        //     this.pageStatus = "Confirm Pin"
        //     this.newPincount++
        //     this.finalPin = this.codeone + this.codetwo + this.codethree + this.codefour
        //     console.log("The four digit code was entered", this.finalPin);
        //     this.codeone = null;
        //     this.codetwo = null;
        //     this.codethree = null;
        //     this.codefour = null;
        //     this.passcode = '';
        //     this.int = 0

        //   }
        // }
      }
    
  }

  delete() {
    if (this.passcode.length > 0) {
      if (this.passcode.length == 1) {
        this.codeone = null
        this.int--
      } else if (this.passcode.length == 2) {
        this.codetwo = null;
        this.int--
      } else if (this.passcode.length == 3) {
        this.codethree = null;
        this.int--
      } else if (this.passcode.length == 4) {
        this.codefour = null;
        this.int--
      }
      this.passcode = this.passcode.substr(0, this.passcode.length - 1);
    }
  }

}
