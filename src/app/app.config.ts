import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';
import { routes } from './app-routing/app-routing.module';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

export const AppRoutingModule = RouterModule.forRoot(routes);