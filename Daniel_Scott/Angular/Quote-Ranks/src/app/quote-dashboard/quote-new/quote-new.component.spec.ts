import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNewComponent } from './quote-new.component';

describe('QuoteNewComponent', () => {
  let component: QuoteNewComponent;
  let fixture: ComponentFixture<QuoteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
