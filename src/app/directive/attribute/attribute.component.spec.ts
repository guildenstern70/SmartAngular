import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AttributeComponent} from './attribute.component';
import {TopmenuComponent} from '../../components/topmenu/topmenu.component';

describe('AttributeComponent', () => {
    let component: AttributeComponent;
    let fixture: ComponentFixture<AttributeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AttributeComponent,
                TopmenuComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AttributeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
