import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Add} from "../pages/add/add";
import {Weather} from "../providers/weather";
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {Temperature} from "../pipes/temperature";
import {Forecast} from "../pages/forecast/forecast";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Add,
    Temperature,
    Forecast

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Add,
    Forecast

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Weather,


    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
