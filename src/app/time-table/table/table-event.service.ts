import { Injectable } from '@angular/core';
import { TableEvent } from './table-event';

const STORAGE_KEY = 'tableEvents';

@Injectable({
  providedIn: 'root',
})
export class TableEventService {
  getEvents(defaults: TableEvent[] = []): TableEvent[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaults.map(e => this.restoreDates(e));
    }

    try {
      const parsed = JSON.parse(raw) as any[];
      return parsed.map(o => this.restoreDates(o));
    } catch {
      return defaults.map(e => this.restoreDates(e));
    }
  }

  saveEvents(events: TableEvent[]): void {
    const plain = events.map(e => ({
      ...e,
      startTime: e.startTime.toISOString(),
      endTime: e.endTime.toISOString(),
      date: e.date.toISOString(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plain));
  }

  private restoreDates(obj: any): TableEvent {
    return {
      ...obj,
      startTime: new Date(obj.startTime),
      endTime: new Date(obj.endTime),
      date: new Date(obj.date),
    } as TableEvent;
  }
}
