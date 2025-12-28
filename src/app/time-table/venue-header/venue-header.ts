import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
	selector: 'app-venue-header',
	imports: [CommonModule, MatTabsModule],
	templateUrl: './venue-header.html',
	styleUrl: './venue-header.css',
})
export class VenueHeader {
	venues: string[] = ['Venue1', 'Venue2', 'Venue3', 'Venue4', 'Venue5', 'Venue6'];
}
