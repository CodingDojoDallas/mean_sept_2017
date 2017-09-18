import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSingleComponent } from './quote-single.component';

describe('QuoteSingleComponent', () => {
  let component: QuoteSingleComponent;
  let fixture: ComponentFixture<QuoteSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
