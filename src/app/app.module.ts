import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { LoginProvider } from '../providers/login/login';
//page
import { FingerprintPage } from "../pages/fingerprint/fingerprint";
import { PincodePage } from "../pages/pincode/pincode";
import { LoginPinPage } from "../pages/login-pin/login-pin";
import { OrderOutPage } from "../pages/order-out/order-out";
//provider
import { StorageGetProvider } from '../providers/storage-get/storage-get';
import { Camera } from '@ionic-native/camera';

import { SignaturePadModule } from 'angular2-signaturepad';
import { HttpResponseProvider } from '../providers/http-response/http-response';
// import { NgProgressModule } from '@ngx-progressbar/core';

// import { PincodeConfrimPage } from "../pages/pincode-confrim/pincode-confrim";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    FingerprintPage,
    PincodePage,
    LoginPinPage,
    OrderOutPage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    // NgProgressModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    FingerprintPage,
    PincodePage,
    LoginPinPage,
    OrderOutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    LoginProvider,
    StorageGetProvider,
    Camera,
    HttpResponseProvider
  ]
})

export class AppModule {
}
