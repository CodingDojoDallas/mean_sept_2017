import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonComponent } from './washington.component';

describe('WashingtonComponent', () => {
  let component: WashingtonComponent;
  let fixture: ComponentFixture<WashingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
