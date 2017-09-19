import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supersaiyan3Component } from './supersaiyan3.component';

describe('Supersaiyan3Component', () => {
  let component: Supersaiyan3Component;
  let fixture: ComponentFixture<Supersaiyan3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supersaiyan3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supersaiyan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
