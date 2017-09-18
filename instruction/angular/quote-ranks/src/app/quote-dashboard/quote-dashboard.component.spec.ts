import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDashboardComponent } from './quote-dashboard.component';

describe('QuoteDashboardComponent', () => {
  let component: QuoteDashboardComponent;
  let fixture: ComponentFixture<QuoteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
