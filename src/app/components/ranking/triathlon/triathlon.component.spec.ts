import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriathlonComponent } from './triathlon.component';

describe('TriathlonComponent', () => {
  let component: TriathlonComponent;
  let fixture: ComponentFixture<TriathlonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriathlonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriathlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
