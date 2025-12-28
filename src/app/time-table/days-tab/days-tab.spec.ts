import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysTab } from './days-tab';

describe('DaysTab', () => {
  let component: DaysTab;
  let fixture: ComponentFixture<DaysTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
