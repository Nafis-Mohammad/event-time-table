import { Component, inject, OnInit } from '@angular/core';
import { TimelineService } from '../timeline/timeline.service';
import { CommonModule } from '@angular/common';
import { TableEvent } from './table-event';

@Component({
	selector: 'app-table',
	imports: [CommonModule],
	templateUrl: './table.html',
	styleUrl: './table.css',
})
export class Table implements OnInit {

	timelineService = inject(TimelineService);

	venues: string[] = ['Venue A', 'Venue B', 'Venue C', 'Venue D', 'Venue E', 'Venue F', 'Venue G', 'Venue H', 'Venue I', 'Venue J'];
	times: Date[] = [];
	
	tableEvents: TableEvent[] = [];

	ngOnInit(): void {
		this.times = this.timelineService.getAllTimes();
	}
}
