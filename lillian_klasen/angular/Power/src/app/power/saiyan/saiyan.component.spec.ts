import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanComponent } from './saiyan.component';

describe('SaiyanComponent', () => {
  let component: SaiyanComponent;
  let fixture: ComponentFixture<SaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
