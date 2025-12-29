import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DaysTab } from "./days-tab/days-tab";
import { VenueHeader } from './venue-header/venue-header';
import { Timeline } from './timeline/timeline';
import { TableEvent } from "./table-event/table-event";
import { TimeTableService } from './time-table.service';
import { TableEventInterface } from './table-event/table-event.interface';
import { MatDialog } from '@angular/material/dialog';
import { EventForm } from './event-form/event-form';
import { MatButtonModule } from '@angular/material/button';
import { VenueForm } from './venue-form/venue-form';
import { DaysService } from './days-tab/days.service';

@Component({
	selector: 'app-time-table',
	imports: [
        MatButtonModule,
        DaysTab,
        VenueHeader,
        Timeline,
        TableEvent
    ],
	templateUrl: './time-table.html',
	styleUrl: './time-table.css',
})
export class TimeTable implements OnInit {

    readonly dialog = inject(MatDialog);
	timeTableService = inject(TimeTableService);
    daysService = inject(DaysService);

    allTimeTableEvents: TableEventInterface[] = [];
    selectedDayTimeTableEvents: TableEventInterface[] = [];

    ngOnInit(): void {
        this.allTimeTableEvents = this.timeTableService.getTimeTableEvents();
    }

    openAddEventForm() {
        this.dialog.open(EventForm);
    }

    openAddVenueForm() {
        this.dialog.open(VenueForm);
    }

    changeDay(selectedDayIndex: number) {
        const selectedDay = this.daysService.getDatesDetails()[selectedDayIndex];
        this.selectedDayTimeTableEvents = this.allTimeTableEvents.filter(tte => tte.day.getDate() === selectedDay.date.getDate());
    }
}
