import { Component, inject, OnInit } from '@angular/core';
import { TimelineService } from './timeline.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline implements OnInit {
	timelineService: TimelineService = inject(TimelineService);
	times: Date[] = [];

	ngOnInit(): void {
		this.times = this.timelineService.getAllTimes();
	}
}
