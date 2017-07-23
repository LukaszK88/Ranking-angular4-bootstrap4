import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfightComponent } from './profight.component';

describe('ProfightComponent', () => {
  let component: ProfightComponent;
  let fixture: ComponentFixture<ProfightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
