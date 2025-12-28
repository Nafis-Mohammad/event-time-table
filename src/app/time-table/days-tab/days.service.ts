import { Injectable } from '@angular/core';
import { Days } from './days.interface';

@Injectable({
  	providedIn: 'root',
})
export class DaysService {

	getDatesDetails(): Days[] {
		const currentDate = new Date();
		const daysArray: Days[] = [];
		
		const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		
		for (let i = 0; i < 7; i++) {	// First entry will be today's date
			const date = new Date(currentDate);
			date.setDate(currentDate.getDate() + i);
			
			daysArray.push({
				index: i,
				name: dayNames[date.getDay()],
				date: date
			});
		}
		
		return daysArray;
	}
}
