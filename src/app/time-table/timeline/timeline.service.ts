import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root',
})
export class TimelineService {
	
	getAllTimes(): Date[] {
		const times: Date[] = [];
		
		for (let hour = 0; hour < 24; hour++) {
			for (let minute = 0; minute < 60; minute += 15) {
				const dateWithTime = this.formatTimeValue(hour, minute);
				
				times.push(dateWithTime);
			}
		}
		
		return times;
	}

	formatTimeValue(hour: number, minute: number): Date {
		const date = new Date();
		
		date.setHours(hour);
		date.setMinutes(minute);
		date.setSeconds(0);
		date.setMilliseconds(0);
		
		return date;
	}
}
