import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NikeEffects } from './nike_management/effects/nikeEffects';
import { nikeReducer } from './nike_management/reducer/nikeReducer';
import { pumaReducer } from './nike_management/reducer/pumaReducer';
import { pumaEffects } from './nike_management/effects/pumaEffects';
import { adidasEffect } from './nike_management/effects/adidasEffects';
import { adidas_reducer } from './nike_management/reducer/adidasReducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      nike: nikeReducer,
      puma: pumaReducer,
      adidas: adidas_reducer,
    }),
    provideEffects(NikeEffects, pumaEffects, adidasEffect),
    provideAnimationsAsync(),
  ],
};
