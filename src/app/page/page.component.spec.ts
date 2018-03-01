import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageComponent} from './page.component';
import {TopmenuComponent} from '../topmenu/topmenu.component';

describe('PageComponent', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PageComponent,
                TopmenuComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});