import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueHeader } from './venue-header';

describe('VenueHeader', () => {
  let component: VenueHeader;
  let fixture: ComponentFixture<VenueHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
