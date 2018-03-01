import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

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
