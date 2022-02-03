/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/weather.service";
import {WeatherModel} from "../../models/WeatherModel";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  title = "Weather";
  subtitle = "What's the weather like in Milan?";

  wIcon: string = "";
  wMain: string = "?";
  wDescription: string = "?";
  wOk: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeaterIcon(iconId: string) {
    return "https://openweathermap.org/img/w/" + iconId + ".png";
  }

  getWeather() {
    this.weatherService.getWeather()
      .subscribe((data: WeatherModel) => {
        console.log('Got weather from weather service:');
        console.log(data);
        if (data != undefined) {
          if (data.weather[0]) {
            this.wIcon = this.getWeaterIcon(data.weather[0].icon);
            this.wMain = data.weather[0].main;
            this.wDescription = "Weather in Milan is " + data.weather[0].description;
            this.wOk = true;
          }
        }
      });
  }

}
