import { Component } from '@angular/core';
import { DaysTab } from "./days-tab/days-tab";
import { VenueHeader } from "./venue-header/venue-header";
import { Timeline } from "./timeline/timeline";
import { Table } from "./table/table";

@Component({
	selector: 'app-time-table',
	imports: [
		DaysTab,
		// VenueHeader,
		// Timeline,
		Table
	],
	templateUrl: './time-table.html',
	styleUrl: './time-table.css',
})
export class TimeTable {
	
}
