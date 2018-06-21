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
import {ObservableComponent} from './pages/observable/observable.component';
import {HomeComponent} from './pages/home/home.component';
import {WeatherService} from './services/weather.service';
import {TopmenuComponent} from './components/topmenu/topmenu.component';
import {AttributeComponent} from './directive/attribute/attribute.component';
import {StructuralComponent} from './directive/structural/structural.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'page', component: ObservableComponent},
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
                ObservableComponent,
                StructuralComponent,
                AttributeComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                NgbModule.forRoot(),
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
