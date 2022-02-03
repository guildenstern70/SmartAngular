/*
 *
 *   SmartAngular
 *   Template Angular Project
 *   Licensed under: see LICENSE
 *
 *   Copyright (c) 2022 Alessio Saltarin
 *
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageone',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.less']
})
export class PageOneComponent implements OnInit {

  title = "Page One";
  subtitle = "This is the Page One";

  constructor() { }

  ngOnInit(): void {
  }

}
