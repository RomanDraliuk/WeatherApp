import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Add} from "../add/add";
import {Weather} from "../../providers/weather";
import 'rxjs/Rx';
import {Forecast} from "../forecast/forecast";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Weather],

})
export class HomePage {

  public weatherList = [];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public  weather:Weather) {}

  addWeather(){

    let addWeatherModal = this.modalCtrl.create(Add);
   addWeatherModal.onDidDismiss((data) =>{
     if(data){
       this.getWeather(data.city,data.country)
     }

   });
    addWeatherModal.present();
  }
  getWeather(city: string,country:string){

      this.weather.city(city,country)
        .map(data => data.json())
        .subscribe((data) => {
        this.weatherList.push(data);
        }),
        err => console.log(err),
        () => console.log('getWeather comp');
   // this.weatherList.push(data);
  }
  viewForcast(weather){
    console.log(weather);
    this.navCtrl.push(Forecast,{weather: weather});
  }

}
