import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordShieldComponent } from './sword-shield.component';

describe('SwordShieldComponent', () => {
  let component: SwordShieldComponent;
  let fixture: ComponentFixture<SwordShieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwordShieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
