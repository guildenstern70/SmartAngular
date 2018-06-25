/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see LICENSE
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenuComponent } from './topmenu.component';

describe('TopmenuComponent', () => {
  let component: TopmenuComponent;
  let fixture: ComponentFixture<TopmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
