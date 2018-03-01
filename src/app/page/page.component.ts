import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {PersonaService} from '../service/persona.service';
import {Observable} from 'rxjs/Observable';
import {Persona} from '../model/persona';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit
{

    constructor(private titleService: Title,
                private personaService: PersonaService)
    {
        this.titleService.setTitle('SmartAngular | Page');
    }

    refresh()
    {
        this.personaService.refresh();
    }

    get personas(): Observable<Persona[]>
    {
        return this.personaService.personas;
    }

    ngOnInit()
    {
        this.refresh();
    }

}
