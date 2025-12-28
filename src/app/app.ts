import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeTable } from "./time-table/time-table";

@Component({
	selector: 'app-root',
	imports: [TimeTable],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
}
