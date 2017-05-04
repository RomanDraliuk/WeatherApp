import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class Weather {

    private _appId ='8e049d8f69b15ef534dc92c91d045d12';
    private _baseUrl ='http://api.openweathermap.org/data/2.5/';
  constructor(public http: Http) {

  }

  city(city: string, country: string){
    let url = this._baseUrl + 'weather';
    url += '?appId=' + this._appId;
    url += '&q=' + city;
    url += ',' + country;

    return this.http.get(url);
  }
}


