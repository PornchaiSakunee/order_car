import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { LoginProvider } from "../../providers/login/login";

import { Storage } from '@ionic/storage';

// import { FingerprintPage } from "../../pages/fingerprint/fingerprint";
import { PincodePage } from "../../pages/pincode/pincode";
import { StorageGetProvider } from "../../providers/storage-get/storage-get";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  todologin = { username: '', password: '' };
  constructor(
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public loginProvider: LoginProvider,
    public storage: Storage,
    public storageGetProvider: StorageGetProvider
    // public fingerprintPage:FingerprintPage,
    // public pincodePage:PincodePage
  ) {

    this.menu.swipeEnable(false);
    // this.storage.set('set_fist_time', 'Max');

    // let fistTime =  this.storage.get('set_fist_time') ;
    // console.log('ee'+fistTime);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {

    this.loginProvider.loginService(this.todologin.username, this.todologin.password)
      .then(data => {
        // JSON.parse(data);
        // login สำเร็จ
        if (data['emp_code'] != 0) {
          //เช็คว่าล็อกอินครั้งแรกหรือไม
          //  this.storage.set('set_fist_time', 'n');
          this.storage.get('set_fist_time').then((data_fist) => {

            if (data_fist == null) {
              //  ถ้าเป็นการล็อกอินครั้งแรก  set set_fist_time = 1
              this.storage.set('set_fist_time', '1');
              this.nav.setRoot(PincodePage);
            } else {
              this.nav.setRoot(HomePage);
            }
          }, err => {
            this.storage.set('set_fist_time', '1');
            this.nav.setRoot(PincodePage);
          });
          //  console.log(st_fist);


        } else {
          alert('ชื่อผู้ใช้หรือรหัสผ่าน')
        }
      });
    // this.nav.setRoot(HomePage);
  }



  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
