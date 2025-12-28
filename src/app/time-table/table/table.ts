import { Component, inject, OnInit } from '@angular/core';
import { TimelineService } from '../timeline/timeline.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableEvent } from './table-event';
import { TableEventService } from './table-event.service';

@Component({
	selector: 'app-table',
	imports: [CommonModule, FormsModule],
	templateUrl: './table.html',
	styleUrls: ['./table.css'],
})
export class Table implements OnInit {
	timelineService = inject(TimelineService);
	tableEventService = inject(TableEventService);

	venues = ['Venue A', 'Venue B', 'Venue C', 'Venue D', 'Venue E'];
	times: Date[] = [];

	tableEvents: TableEvent[] = [];

	private defaultEvents: TableEvent[] = [
		{
			name: 'Event 1',
			venues: ['Venue A', 'Venue B'],
			startTime: new Date('2025-12-29T09:00:00'),
			endTime: new Date('2025-12-29T11:00:00'),
			date: new Date(),
		},
		{
			name: 'Event 2',
			venues: ['Venue A'],
			startTime: new Date('2025-12-30T11:00:00'),
			endTime: new Date('2025-12-30T11:15:00'),
			date: new Date('2025-12-30'),
		},
		{
			name: 'Event 1',
			venues: ['Venue B', 'Venue C', 'Venue D'],
			startTime: new Date('2025-12-27T09:00:00'),
			endTime: new Date('2025-12-27T11:00:00'),
			date: new Date('2025-12-27'),
		},
	];

	// form model for new events
	newEvent = {
		name: '',
		venues: [] as string[],
		dateString: '',
		startTimeString: '',
		endTimeString: '',
	};

	toggleVenue(venue: string, checked: boolean) {
		const idx = this.newEvent.venues.indexOf(venue);
		if (checked && idx === -1) this.newEvent.venues.push(venue);
		if (!checked && idx > -1) this.newEvent.venues.splice(idx, 1);
	}

	addEvent(): void {
		if (!this.newEvent.name || !this.newEvent.dateString || !this.newEvent.startTimeString || !this.newEvent.endTimeString || this.newEvent.venues.length === 0) {
			return;
		}

		const datePart = this.newEvent.dateString; // YYYY-MM-DD
		const start = new Date(`${datePart}T${this.newEvent.startTimeString}`);
		const end = new Date(`${datePart}T${this.newEvent.endTimeString}`);

		const ev: TableEvent = {
			name: this.newEvent.name,
			venues: [...this.newEvent.venues],
			startTime: start,
			endTime: end,
			date: new Date(datePart),
		};

		this.tableEvents.push(ev);
		this.tableEventService.saveEvents(this.tableEvents);

		// reset form
		this.newEvent.name = '';
		this.newEvent.venues = [];
		this.newEvent.dateString = '';
		this.newEvent.startTimeString = '';
		this.newEvent.endTimeString = '';
	}
	
	selectedDate = new Date();

    ngOnInit(): void {
        this.times = this.timelineService.getAllTimes();

		// Load events from localStorage; fall back to defaults and persist them
		this.tableEvents = this.tableEventService.getEvents(this.defaultEvents);
		if (!localStorage.getItem('tableEvents')) {
			this.tableEventService.saveEvents(this.tableEvents);
		}
    }

	private sameDay(a: Date, b: Date): boolean {
		return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
	}

	private toMinutes(d: Date): number {
		return d.getHours() * 60 + d.getMinutes();
	}

	isCellFilled(venue: string, time: Date): boolean {
		return this.tableEvents.some(ev =>
			this.sameDay(ev.date, this.selectedDate) &&
			ev.venues.includes(venue) &&
			this.toMinutes(ev.startTime) <= this.toMinutes(time) &&
			this.toMinutes(time) <= this.toMinutes(ev.endTime)
		);
	}

	getEventForCell(venue: string, time: Date): TableEvent | undefined {
		return this.tableEvents.find(ev =>
			this.sameDay(ev.date, this.selectedDate) &&
			ev.venues.includes(venue) &&
			this.toMinutes(ev.startTime) === this.toMinutes(time)
		);
	}
}
