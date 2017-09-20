import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanTwoComponent } from './super-saiyan-two.component';

describe('SuperSaiyanTwoComponent', () => {
  let component: SuperSaiyanTwoComponent;
  let fixture: ComponentFixture<SuperSaiyanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
