import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLongswordComponent } from './update-longsword.component';

describe('UpdateLongswordComponent', () => {
  let component: UpdateLongswordComponent;
  let fixture: ComponentFixture<UpdateLongswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLongswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLongswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
