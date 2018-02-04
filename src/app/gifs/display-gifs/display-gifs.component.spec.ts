import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifsComponent } from './display-gifs.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DisplayGifsComponent', () => {
  let component: DisplayGifsComponent;
  let fixture: ComponentFixture<DisplayGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGifsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
