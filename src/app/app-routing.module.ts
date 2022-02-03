/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { PageOneComponent } from './pages/pageone/page-one.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from "./pages/weather/weather.component";

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'page-one-component', component: PageOneComponent },
  { path: 'weather-component', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
