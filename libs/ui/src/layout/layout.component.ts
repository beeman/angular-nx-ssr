import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <div class="container my-5">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `
})
export class LayoutComponent {}
