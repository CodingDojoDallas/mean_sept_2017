import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyantwoComponent } from './supersaiyantwo.component';

describe('SupersaiyantwoComponent', () => {
  let component: SupersaiyantwoComponent;
  let fixture: ComponentFixture<SupersaiyantwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyantwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
