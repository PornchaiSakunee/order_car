import { Component } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular";
import { Storage } from '@ionic/storage';

import { NotificationsPage } from "../notifications/notifications";
import { SettingsPage } from "../settings/settings";
import { TripsPage } from "../trips/trips";
import { SearchLocationPage } from "../search-location/search-location";
import { OrderOutPage } from "../order-out/order-out";
import { HttpResponseProvider } from "../../providers/http-response/http-response";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  set_emp_code: any;
  set_emp_Fname: string = "pornchai";
  set_emp_Lname: string = "sakunee";
  bt_order:string;
  // เก็บข้อมูลใบนำรถออก
  dataHTTP:any

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController, public httpResponseProvider: HttpResponseProvider) {
    
    storage.get('set_emp_code').then((val) => {
      this.set_emp_code = val
      httpResponseProvider.HTTPService('check_order_out.php', { emp_code: val }).then(data => {
       
        
        if (data['status']  == 1) {
            this.dataHTTP = data ;
           this.bt_order = '<button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="goOrderOut()"><ion-icon name="ios-paper-outline"></ion-icon> order</button>';
        }else{
          this.bt_order = "!ไม่พบใบนนำรถออก";
        }

      })

    });
    // this.storage.get('set_emp_code').then((data)=>{this.set_emp_code=data;})
    // console.log(this.set_emp_code);


  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Rio de Janeiro, Brazil"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

  goOrderOut() {
    
    this.nav.push(OrderOutPage,this.dataHTTP);
    // this.nav.push(OrderOutPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
