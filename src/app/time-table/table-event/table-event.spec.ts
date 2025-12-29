import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEvent } from './table-event';

describe('TableEvent', () => {
  let component: TableEvent;
  let fixture: ComponentFixture<TableEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
