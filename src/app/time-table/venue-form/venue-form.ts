import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VenueService } from './venue.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-venue-form',
	imports: [
		MatButtonModule,
		MatDialogActions,
		MatDialogTitle,
		MatDialogContent,
		MatDialogClose,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule
	],
	templateUrl: './venue-form.html',
	styleUrl: './venue-form.css',
})
export class VenueForm {

	readonly dialog = inject(MatDialog);

	venueService = inject(VenueService);

  	venueForm: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
	})

	createVenue() {
		if (this.venueForm.invalid) {
			return;
		}
		this.venueService.createVenue(this.venueForm.get('name')?.value);
		console.log("Venue Created");
		this.dialog.closeAll();
	}

}
