import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from 'src/app/weatherservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  constructor ( private wSvc: WeatherserviceService) {}

  ngOnInit(): void {
    this.wSvc.getWeather().subscribe(
      w => {
        console.log(w);

      }
    )
  }

}
