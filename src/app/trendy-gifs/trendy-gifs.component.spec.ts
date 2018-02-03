import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyGifsComponent } from './trendy-gifs.component';

describe('TrendyGifsComponent', () => {
  let component: TrendyGifsComponent;
  let fixture: ComponentFixture<TrendyGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendyGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendyGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
