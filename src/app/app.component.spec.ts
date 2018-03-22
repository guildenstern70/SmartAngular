/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see license.txt
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule, Title} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from './pages/page.component';
import {HomeComponent} from './home/home.component';
import {WeatherService} from './services/weather.service';
import {TopmenuComponent} from './topmenu/topmenu.component';
import {AttributeComponent} from './directive/attribute/attribute.component';
import {StructuralComponent} from './directive/structural/structural.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'page', component: PageComponent},
    {path: 'directive/structural', component: StructuralComponent},
    {path: 'directive/attribute', component: AttributeComponent},
];

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                TopmenuComponent,
                HomeComponent,
                PageComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                RouterModule.forRoot(
                    appRoutes,
                    {useHash: true}
                )
            ],
            providers: [
                Title,
                WeatherService
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
