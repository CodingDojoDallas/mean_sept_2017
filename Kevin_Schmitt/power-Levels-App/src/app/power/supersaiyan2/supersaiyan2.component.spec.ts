import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supersaiyan2Component } from './supersaiyan2.component';

describe('Supersaiyan2Component', () => {
  let component: Supersaiyan2Component;
  let fixture: ComponentFixture<Supersaiyan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supersaiyan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supersaiyan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
