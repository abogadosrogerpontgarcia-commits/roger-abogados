import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { NgIconsModule } from '@ng-icons/core';
import { featherInstagram, featherLinkedin, featherFileText, featherShield, featherBriefcase, featherTrendingUp, featherHeart, featherCheck } from '@ng-icons/feather-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    importProvidersFrom(
      NgIconsModule.withIcons({
        featherInstagram,
        featherLinkedin,
        featherFileText,
        featherShield,
        featherBriefcase,
        featherTrendingUp,
        featherHeart,
        featherCheck
      })
    ),
  ],
};
