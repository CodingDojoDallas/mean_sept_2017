import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanFourComponent } from './super-saiyan-four.component';

describe('SuperSaiyanFourComponent', () => {
  let component: SuperSaiyanFourComponent;
  let fixture: ComponentFixture<SuperSaiyanFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
