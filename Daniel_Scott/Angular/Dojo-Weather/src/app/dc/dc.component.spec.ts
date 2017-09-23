import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcComponent } from './dc.component';

describe('DcComponent', () => {
  let component: DcComponent;
  let fixture: ComponentFixture<DcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
