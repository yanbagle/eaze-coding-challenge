import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGifsComponent } from './search-gifs.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

describe('SearchGifsComponent', () => {
  let component: SearchGifsComponent;
  let fixture: ComponentFixture<SearchGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchGifsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when user searches for gif', () => {
    component.keywordOutput.subscribe((keyword) => {
      expect(keyword).toBe(component.userSearch);
    });
    component.userSearch = 'keyword';
    component.sendUserInput();
  });

});
