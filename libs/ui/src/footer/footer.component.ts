import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `    
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-text m-auto">
        <i class="fa fa-heart"></i>
      </div>
    </nav>
  `,
  styles: [`
    .fa-heart {
      color: red;
    }
  `]
})
export class FooterComponent {}
