import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSinglecdComponent } from './quote-singlecd.component';

describe('QuoteSinglecdComponent', () => {
  let component: QuoteSinglecdComponent;
  let fixture: ComponentFixture<QuoteSinglecdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSinglecdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSinglecdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
