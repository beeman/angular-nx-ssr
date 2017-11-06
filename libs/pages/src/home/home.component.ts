import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home</h2>
    <h4>Is where the heart is...</h4>
    <h6>On the bus...</h6>
    <p>
      <i class="fa fa-fw fa-home"></i>
      <i class="fa fa-fw fa-heart"></i>
      <i class="fa fa-fw fa-bus"></i>
    </p>
  `,
})
export class HomeComponent {}
