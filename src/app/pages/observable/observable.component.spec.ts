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

import {TopmenuComponent} from '../../components/topmenu/topmenu.component';
import {PersonaService} from '../../services/persona.service';
import {ObservableComponent} from './observable.component';

describe('ObservableComponent', () => {
    let component: ObservableComponent;
    let fixture: ComponentFixture<ObservableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ObservableComponent,
                TopmenuComponent
            ],
            providers: [
                PersonaService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObservableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
