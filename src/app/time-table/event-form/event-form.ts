import { Component, computed, inject, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogTitle, MatDialogContent, MatDialogClose, MatDialog } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { VenueService } from '../venue-form/venue.service';
import { MatSelectModule } from '@angular/material/select';
import { TimeTableService } from '../time-table.service';

@Component({
	selector: 'app-event-form',
	providers: [provideNativeDateAdapter()],
	imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogActions,
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTimepickerModule,
    MatDatepickerModule,
	MatSelectModule,
    MatOption
],
	templateUrl: './event-form.html',
	styleUrl: './event-form.css',
})
export class EventForm {

	readonly dialog = inject(MatDialog);
	venueService = inject(VenueService);
	timeTableService = inject(TimeTableService);

	eventForm: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		venues: new FormControl([], [Validators.required]),
		startTime: new FormControl('', [Validators.required]),
		endTime: new FormControl('', [Validators.required]),
		day: new FormControl('', [Validators.required]),
	});

	venues: Signal<string[]> = computed(() => this.venueService.getVenues());

	createEvent() {
		if (this.eventForm.invalid) {
			return;
		}
		this.timeTableService.createTimeTableEvents(this.eventForm.value);
		console.log("Venue Created");
		this.dialog.closeAll();
	}
}
