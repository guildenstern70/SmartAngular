import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit
{
    private _name = '';

    @Input()
    set name(name: string)
    {
        this._name = (name && name.trim()) || '???';
    }

    get name(): string { return this._name; }

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
