import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolearmsComponent } from './polearms.component';

describe('PolearmsComponent', () => {
  let component: PolearmsComponent;
  let fixture: ComponentFixture<PolearmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolearmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolearmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
