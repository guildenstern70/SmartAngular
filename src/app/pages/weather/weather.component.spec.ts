/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from '../../services/weather.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [HttpClientModule],
      providers: [WeatherService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
