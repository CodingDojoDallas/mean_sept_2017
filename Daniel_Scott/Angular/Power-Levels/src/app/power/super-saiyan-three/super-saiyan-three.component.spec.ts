import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanThreeComponent } from './super-saiyan-three.component';

describe('SuperSaiyanThreeComponent', () => {
  let component: SuperSaiyanThreeComponent;
  let fixture: ComponentFixture<SuperSaiyanThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
