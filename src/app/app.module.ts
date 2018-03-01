import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'page', component: PageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TopmenuComponent,
        HomeComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { useHash: true }
        )
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
