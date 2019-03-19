import { Component } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'pm-root',
  template: `
  <ul class='nav nabar-nav'>
    <li><a [routerLink]="['/welcome']">Home</a></li>
    <li><a [routerLink]="['/products']">Product List</a></li>
  </ul>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
