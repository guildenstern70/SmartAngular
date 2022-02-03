/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
