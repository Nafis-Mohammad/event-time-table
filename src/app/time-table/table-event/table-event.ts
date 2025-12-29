import { Component, computed, inject, input, OnInit } from '@angular/core';
import { TableEventInterface } from './table-event.interface';
import { VenueService } from '../venue-form/venue.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-table-event',
	imports: [
		CommonModule
	],
	templateUrl: './table-event.html',
	styleUrl: './table-event.css',
})
export class TableEvent {

	venueService = inject(VenueService);

	pixelPerMinute: number = 4;		// 15 minutes interval is 60 pixel, per minute interval is 4 pixel.
	pixelPerVenue: number = 300;		// 15 minutes interval is 60 pixel, per minute interval is 4 pixel.

	tableEvent = input.required<TableEventInterface>();

	tableEventStyle = computed(() => {
		return {
			top: this.getTop() + 'px',	// startTime - midnight
			height: this.getHeight() + 'px',	// endTime - startTime
			left: this.getLeft() + 'px',	// First venue
			width: this.getWidth() + 'px'	// Number of Venues
		}
	})

	venues = computed(() => this.venueService.getVenues());
	
	getTop(): number {
		const startTime = this.tableEvent().startTime;
		const midnight = new Date(startTime);
		midnight.setHours(0, 0, 0, 0);
		const minutesFromMidnight = (startTime.getTime() - midnight.getTime()) / (1000 * 60);
		// return 30 * this.pixelPerMinute;
		return minutesFromMidnight * this.pixelPerMinute;
	}

	getHeight(): number {
		const startTime = this.tableEvent().startTime.getTime() || new Date().getTime();
		const endTime = this.tableEvent().endTime.getTime() || new Date().getTime();
		const diffInMinutes = (endTime - startTime) / (1000 * 60);

		// return (15 + 30) * this.pixelPerMinute;
		return (15 + diffInMinutes) * this.pixelPerMinute;
	}

	getLeft(): number {
		const firstSelectedVenue = this.tableEvent().venues[0];
		const firstSelectedVenueIndex = this.venues().indexOf(firstSelectedVenue);
		return firstSelectedVenueIndex * this.pixelPerVenue;
	}

	getWidth(): number {
		return this.pixelPerVenue * this.tableEvent().venues.length;
	}
}
