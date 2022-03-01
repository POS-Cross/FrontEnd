import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPerformanceComponent } from './offer-performance.component';

describe('OfferPerfromanceComponent', () => {
  let component: OfferPerformanceComponent;
  let fixture: ComponentFixture<OfferPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
