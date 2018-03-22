/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see license.txt
 *
 * Copyright (c)2018 Alessio Saltarin 
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {WeatherService} from './weather.service';
import {HttpClientModule} from '@angular/common/http';

describe('WeatherService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WeatherService],
            imports: [
                HttpClientModule
            ],
        });
    });

    it('should be created', inject([WeatherService], (service: WeatherService) => {
        expect(service).toBeTruthy();
    }));

    it('should get the service', inject([WeatherService], (service: WeatherService) => {
        expect(service.getWeather()).toBeTruthy();
    }));
});
