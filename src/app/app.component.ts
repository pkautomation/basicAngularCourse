import { Component } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `f
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
