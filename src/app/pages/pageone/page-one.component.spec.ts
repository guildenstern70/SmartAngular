/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';

describe('PageoneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
