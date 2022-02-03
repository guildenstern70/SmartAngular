/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { WeatherModel } from "../models/WeatherModel";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private URL = 'https://api.openweathermap.org/data/2.5/weather?q=Milan&APPID=fa77572aa45b2ee8be22668022e83c2c';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherModel>
  {
    return this.http.get<WeatherModel>(this.URL);
  }

}
