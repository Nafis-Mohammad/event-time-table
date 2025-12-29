import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { VenueService } from '../venue-form/venue.service';

@Component({
	selector: 'app-venue-header',
	imports: [CommonModule, MatTabsModule],
	templateUrl: './venue-header.html',
	styleUrl: './venue-header.css',
})
export class VenueHeader {
	venueService = inject(VenueService);
	
	// venues: string[] = ['Venue1', 'Venue2', 'Venue3', 'Venue4', 'Venue5', 'Venue6', 'Venue2', 'Venue3', 'Venue4', 'Venue5', 'Venue6', 'Venue2', 'Venue3', 'Venue4', 'Venue5', 'Venue6', 'Venue2', 'Venue3', 'Venue5', 'Venue6'];
	venues: Signal<string[]> = computed(() => this.venueService.getVenues());
}
