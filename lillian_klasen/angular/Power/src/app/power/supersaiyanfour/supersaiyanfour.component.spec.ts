import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanfourComponent } from './supersaiyanfour.component';

describe('SupersaiyanfourComponent', () => {
  let component: SupersaiyanfourComponent;
  let fixture: ComponentFixture<SupersaiyanfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
