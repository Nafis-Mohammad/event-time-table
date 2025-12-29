import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MAT_TIMEPICKER_CONFIG } from '@angular/material/timepicker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: MAT_TIMEPICKER_CONFIG,
      useValue: {interval: '15 minutes'},
    }
  ]
};
