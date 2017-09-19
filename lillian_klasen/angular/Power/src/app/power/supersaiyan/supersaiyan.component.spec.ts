import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanComponent } from './supersaiyan.component';

describe('SupersaiyanComponent', () => {
  let component: SupersaiyanComponent;
  let fixture: ComponentFixture<SupersaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
