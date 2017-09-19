import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSingleComponent } from './car-single.component';

describe('CarSingleComponent', () => {
  let component: CarSingleComponent;
  let fixture: ComponentFixture<CarSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
