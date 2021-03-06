/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see LICENSE
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {TopmenuComponent} from './components/topmenu/topmenu.component';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ObservableComponent} from './pages/observable/observable.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service';
import {PersonaService} from './services/persona.service';
import {StructuralComponent} from './directive/structural/structural.component';
import {AttributeComponent} from './directive/attribute/attribute.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'observable', component: ObservableComponent},
    {path: 'directive/structural', component: StructuralComponent},
    {path: 'directive/attribute', component: AttributeComponent},
];

@NgModule({
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
        WeatherService,
        PersonaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
