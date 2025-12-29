import { Injectable, signal, WritableSignal } from '@angular/core';
import { TableEventInterface } from './table-event/table-event.interface';

@Injectable({
  	providedIn: 'root',
})
export class TimeTableService {

	timeTableEvents: WritableSignal<TableEventInterface[]> = signal([]);

	constructor() {
		this.initializeTimeTableEvents();
	}

	initializeTimeTableEvents() {
		const storedData = localStorage.getItem('timeTableEvents');

		if (storedData) {
			let data: TableEventInterface[] = JSON.parse(storedData);
			data = data.map(eachData => {
				return {
					...eachData,
					startTime: new Date(eachData.startTime),
					endTime: new Date(eachData.endTime),
					day: new Date(eachData.day)
				};
			});
			this.timeTableEvents.set(data);
		} else {
			console.log('timeTableEvents not found in local storage');
			this.timeTableEvents.set([]);
		}
	}

	getTimeTableEvents(): TableEventInterface[] {
		return this.timeTableEvents();
	}

	setTimeTableEvents(timeTableEvents: TableEventInterface[]) {
		this.timeTableEvents.set(timeTableEvents);
		localStorage.setItem('timeTableEvents', JSON.stringify(timeTableEvents));
	}

	createTimeTableEvents(venutimeTableEvent: TableEventInterface) {
		const existingTimeTableEvents = this.getTimeTableEvents();
		const newTimeTableEvents = [...existingTimeTableEvents, venutimeTableEvent];
		this.timeTableEvents.set(newTimeTableEvents);
		this.setTimeTableEvents(this.timeTableEvents());
	}
}
