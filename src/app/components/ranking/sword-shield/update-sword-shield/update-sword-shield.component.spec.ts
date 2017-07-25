import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSwordShieldComponent } from './update-sword-shield.component';

describe('UpdateSwordShieldComponent', () => {
  let component: UpdateSwordShieldComponent;
  let fixture: ComponentFixture<UpdateSwordShieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSwordShieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSwordShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
