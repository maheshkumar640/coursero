import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CorporateComponent } from './corporate/corporate.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { PrivatecComponent } from './privatec/privatec.component';
import { HomemainComponent } from './homemain/homemain.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule,
       RouterOutlet,
       RouterLink,
       RouterLinkActive,
       HomemainComponent,
       PrivatecComponent,
       CorporateComponent,
       BussinessComponent
    ]
})
export class AppComponent {
  title = 'coursero';
}
