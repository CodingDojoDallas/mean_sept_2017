import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBicycleComponent } from './edit-bicycle.component';

describe('EditBicycleComponent', () => {
  let component: EditBicycleComponent;
  let fixture: ComponentFixture<EditBicycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBicycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
