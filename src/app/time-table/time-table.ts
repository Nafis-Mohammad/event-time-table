import { Component } from '@angular/core';
import { DaysTab } from "./days-tab/days-tab";
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
