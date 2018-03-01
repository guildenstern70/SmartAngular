import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private titleService: Title)
  {
      this.titleService.setTitle('SmartAngular | Page');
  }

  ngOnInit()
  {
  }

}
