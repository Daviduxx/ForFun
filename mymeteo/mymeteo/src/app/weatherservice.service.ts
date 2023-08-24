import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Root } from './interfaces/iweather';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  WEATHER_API = environment.WEATHER_API

  constructor( private http:HttpClient) { }

  getWeather(){
    return this.http.get<Root>(this.WEATHER_API);
  }
}
