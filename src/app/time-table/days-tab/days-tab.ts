import { Component, inject, OnInit, signal } from '@angular/core';
import { DaysService } from './days.service';
import { Days } from './days.interface';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-days-tab',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './days-tab.html',
  styleUrl: './days-tab.css',
})
export class DaysTab implements OnInit {
	daysService: DaysService = inject(DaysService);
	days: Days[] = [];

	ngOnInit() {
		this.days = this.daysService.getDatesDetails();
	}
}
