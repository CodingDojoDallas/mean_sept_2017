import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanthreeComponent } from './supersaiyanthree.component';

describe('SupersaiyanthreeComponent', () => {
  let component: SupersaiyanthreeComponent;
  let fixture: ComponentFixture<SupersaiyanthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
