import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StructuralComponent} from './structural.component';
import {TopmenuComponent} from '../../components/topmenu/topmenu.component';

describe('StructuralComponent', () => {
    let component: StructuralComponent;
    let fixture: ComponentFixture<StructuralComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StructuralComponent,
                TopmenuComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StructuralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
