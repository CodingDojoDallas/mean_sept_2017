import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleListComponent } from './bicycle-list.component';

describe('BicycleListComponent', () => {
  let component: BicycleListComponent;
  let fixture: ComponentFixture<BicycleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
