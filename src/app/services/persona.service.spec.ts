/*
 * SmartAngular
 * Template Angular Project
 *
 * Licensed under: see LICENSE
 *
 * Copyright (c)2018 Alessio Saltarin
 *
 */

import { TestBed, inject } from '@angular/core/testing';

import { PersonaService } from './persona.service';

describe('PersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaService]
    });
  });

  it('should be created', inject([PersonaService], (service: PersonaService) => {
    expect(service).toBeTruthy();
  }));
});
