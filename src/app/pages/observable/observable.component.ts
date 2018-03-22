/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see license.txt
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {PersonaService} from '../../services/persona.service';
import {Observable} from 'rxjs/Observable';
import {Persona} from '../../models/persona';

@Component({
    selector: 'app-page',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit
{

    constructor(private titleService: Title,
                private personaService: PersonaService)
    {
        this.titleService.setTitle('SmartAngular | Observable');
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
