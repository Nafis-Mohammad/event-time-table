import { Component, computed, inject, model, OnInit, output, Signal, signal } from '@angular/core';
import { DaysService } from './days.service';
import { Days } from './days.interface';
import { CommonModule } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-days-tab',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './days-tab.html',
  styleUrl: './days-tab.css',
})
export class DaysTab {

	daysService: DaysService = inject(DaysService);

	days: Signal<Days[]> = computed(() => this.daysService.getDatesDetails());

	selectedTabIndex = output<number>();

	getSelectedTabIndex(selectedTab: MatTabChangeEvent) {
		this.selectedTabIndex.emit(selectedTab.index);
	}
}
