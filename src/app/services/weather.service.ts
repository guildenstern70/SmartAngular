/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see LICENSE
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService
{

    private URL = 'http://api.openweathermap.org/data/2.5/weather?q=Milan&APPID=fa77572aa45b2ee8be22668022e83c2c';

    constructor(private http: HttpClient)
    { }

    getWeather(): Observable<Object>
    {
        return this.http.get(this.URL);
    }

}
