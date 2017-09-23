import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanJoseComponent } from './san-jose.component';

describe('SanJoseComponent', () => {
  let component: SanJoseComponent;
  let fixture: ComponentFixture<SanJoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanJoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanJoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
