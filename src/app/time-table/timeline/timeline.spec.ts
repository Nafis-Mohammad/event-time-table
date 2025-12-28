import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEvent } from './timeline';

describe('TimelineEvent', () => {
  let component: TimelineEvent;
  let fixture: ComponentFixture<TimelineEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
