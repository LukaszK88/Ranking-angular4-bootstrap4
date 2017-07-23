import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordBucklerComponent } from './sword-buckler.component';

describe('SwordBucklerComponent', () => {
  let component: SwordBucklerComponent;
  let fixture: ComponentFixture<SwordBucklerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwordBucklerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordBucklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
