import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';
import * as Tesseract from 'tesseract.js'
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
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

  @ViewChild(SignaturePad) public signaturePad : SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  public signatureImage : string;

  photos: any;
  base64Image: string;
  progressBar: any;
  imageText: string;
  textErr:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    private alertCtrl: AlertController,

    // public progress: NgProgress
  ) {
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
    const options: CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  getPicture(sourceType: PictureSourceType) {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.recognizeImage(`data:image/jpeg;base64,${imageData}`);
    });
  }

  recognizeImage(selectedImage: string) {
    Tesseract.recognize(selectedImage)
      .progress(message => {
        if (message.status === 'recognizing text')
          // this.progress.set(message.progress);
          console.log(message.progress);
          this.progressBar = message.progress ;

      })
      .catch(err => console.error(err))
      .then(result => {
        this.imageText = result.text;
      })
      .finally(resultOrError => {
        // this.progress.complete();
        this.textErr = resultOrError;
        console.log(resultOrError);
      });
  }

  
  drawClear() {
    this.signaturePad.clear();
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
