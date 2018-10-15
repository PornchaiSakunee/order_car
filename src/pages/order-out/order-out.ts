import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import * as Tesseract from 'tesseract.js'
// import { NgProgress } from '@ngx-progressbar/core';

/**
 * Generated class for the OrderOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-out',
  templateUrl: 'order-out.html',
})
export class OrderOutPage {
  public photos : any;
  public base64Image : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public camera:Camera,private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderOutPage');
  }
  
  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'Sure you want to delete this photo? There is NO undo!',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.photos.splice(index, 1);
          }
        }
      ]
    });
  confirm.present();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }
  // getPicture(sourceType: PictureSourceType) {
  //   this.camera.getPicture({
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     sourceType: sourceType,
  //     allowEdit: true,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   }).then((imageData) => {
  //     this.selectedImage = `data:image/jpeg;base64,${imageData}`;
  //   });
  // }

}
