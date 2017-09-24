import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBicycleComponent } from './new-bicycle.component';

describe('NewBicycleComponent', () => {
  let component: NewBicycleComponent;
  let fixture: ComponentFixture<NewBicycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBicycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
