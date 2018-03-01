import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WeatherService} from '../service/weather.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

    private title: string;
    private city: string;
    private currentWeather: string;

    constructor(private titleService: Title,
                private weather: WeatherService)
    {
        this.title = 'SmartAngular';
        this.titleService.setTitle('SmartAngular | Home');
    }

    ngOnInit()
    {
        this.weather.getWeather().subscribe(
            data => {
                console.log(data);
                this.city = data['name'];
                this.currentWeather = data['weather'][0].description;

            },
            error => {
                console.log(error);
                this.city = '???';
                this.currentWeather = error;
            }
        );
    }

}
