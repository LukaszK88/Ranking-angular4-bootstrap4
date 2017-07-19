import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BohurtComponent } from './bohurt.component';

describe('BohurtComponent', () => {
  let component: BohurtComponent;
  let fixture: ComponentFixture<BohurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BohurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BohurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
