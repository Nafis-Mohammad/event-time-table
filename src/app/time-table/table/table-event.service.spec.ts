import { TestBed } from '@angular/core/testing';

import { TableEventService } from './table-event.service';

describe('TableEventService', () => {
  let service: TableEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
