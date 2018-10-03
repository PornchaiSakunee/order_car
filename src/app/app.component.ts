import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";

import { LoginProvider } from "../providers/login/login";

// import { PincodePage } from "../pages/pincode/pincode";
import { LoginPinPage } from "../pages/login-pin/login-pin";
import { FingerprintPage } from "../pages/fingerprint/fingerprint";
import { Storage } from '@ionic/storage';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loginProvider:LoginProvider,
    public storage:Storage
    // public keyboard: Keyboard
  ) {
    // this.loginProvider.loginService() set_login_pincode,set_login_userpass,set_login_fingerprint
    this.storage.get('set_pin_id').then((data_pin_id) => {
    
     
      if(data_pin_id != null){
        //  ถ้ามีการตั้งค่าเป็น
        this.rootPage = LoginPinPage
       }else{
        this.rootPage = LoginPage
       }
    },(error)=>{
      this.rootPage = LoginPage
    });

    this.initializeApp();
    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      // this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
