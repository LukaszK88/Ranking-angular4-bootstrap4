import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongswordComponent } from './longsword.component';

describe('LongswordComponent', () => {
  let component: LongswordComponent;
  let fixture: ComponentFixture<LongswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
