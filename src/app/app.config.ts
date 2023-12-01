import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CorporateComponent } from './corporate/corporate.component';
import { BussinessComponent } from './bussiness/bussiness.component';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from '../assets/app.routes';
import { Routes,RouterModule } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
// const routes: Routes = [
//   {path:'corporate', component:CorporateComponent},
//   {path:'bussiness', component:BussinessComponent}
// ];
export const AppRoutingModule = RouterModule.forRoot(routes);