import { NgModule, importProvidersFrom } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { routes } from '../app.config';
import { Router, RouterModule,Routes } from '@angular/router';
import { PrivatecComponent } from '../privatec/privatec.component';
import { BussinessComponent } from '../bussiness/bussiness.component';
import { CorporateComponent } from '../corporate/corporate.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  // imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

const routes: Routes = [
  {path:'privatec', component: PrivatecComponent},
  {path:'bussiness', component: BussinessComponent},
  {path:'corporate', component:CorporateComponent}
];