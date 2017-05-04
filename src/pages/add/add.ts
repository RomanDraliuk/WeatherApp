import { Component } from '@angular/core';
import {IonicPage,  NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the Add page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class Add {

  public data = {
    country: 'il'
  };
  constructor(public view : ViewController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Add');
  }

  dismiss(formData){
      this.view.dismiss(formData);
  }
}
