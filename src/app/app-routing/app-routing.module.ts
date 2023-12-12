import { NgModule } from '@angular/core';

import { Router, RouterModule,Routes } from '@angular/router';
import { PrivatecComponent } from '../privatec/privatec.component';
import { BussinessComponent } from '../bussiness/bussiness.component';
import { CorporateComponent } from '../corporate/corporate.component';
import { HomemainComponent } from '../homemain/homemain.component';

@NgModule({
  declarations: [
  
  ],
  // imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routes: Routes = [
  {path:"",component:HomemainComponent},
  {path:'privatec', component: PrivatecComponent},
  {path:'bussiness', component: BussinessComponent},
  {path:'corporate', component:CorporateComponent}
];
