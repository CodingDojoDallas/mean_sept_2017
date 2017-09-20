import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supersaiyan4Component } from './supersaiyan4.component';

describe('Supersaiyan4Component', () => {
  let component: Supersaiyan4Component;
  let fixture: ComponentFixture<Supersaiyan4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supersaiyan4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supersaiyan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
