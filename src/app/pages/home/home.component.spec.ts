/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see license.txt
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {TopmenuComponent} from '../../topmenu/topmenu.component';
import {WeatherService} from '../../services/weather.service';
import {BrowserModule, Title} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                TopmenuComponent
            ],
            providers: [
                Title,
                WeatherService
            ],
            imports: [
                BrowserModule,
                HttpClientModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
