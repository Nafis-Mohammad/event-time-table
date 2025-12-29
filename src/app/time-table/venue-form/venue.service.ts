import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  	providedIn: 'root',
})
export class VenueService {

	venues: WritableSignal<string[]> = signal([]);

	constructor() {
		this.initializeVenues();
	}

	initializeVenues() {
		const storedData = localStorage.getItem('venues');

		if (storedData) {
			this.venues.set(JSON.parse(storedData));
		} else {
			console.log('venues not found in local storage');
			this.venues.set([]);
		}
	}
	
	getVenues(): string[] {
		return this.venues();
	}
	
	setVenues(venues: string[]) {
		this.venues.set(venues);
		localStorage.setItem('venues', JSON.stringify(venues));
	}

	createVenue(venue: string) {
		const existingVenues = this.getVenues();
		const newVenues = [...existingVenues, venue];
		this.venues.set(newVenues);
		this.setVenues(this.venues());
	}
}
