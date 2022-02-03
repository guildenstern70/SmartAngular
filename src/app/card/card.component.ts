/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input('title') title = '?';
  @Input('description') description = '?';

  constructor() { }

  ngOnInit(): void {
  }

}
