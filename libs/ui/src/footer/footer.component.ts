import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `    
    <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark">
      <div class="navbar-text m-auto">
        Built with <i class="fa fa-heart"></i> by beeman
      </div>
      <div class="navbar-text m-0" *ngIf="devMode">
        <i class="fa fa-bug" title="Development Mode Enabled"></i>
      </div>
    </nav>
  `,
  styles: [
    `
    .fa-heart {
      color: red;
    }
  `
  ]
})
export class FooterComponent implements OnInit {
  public devMode: boolean = false;
  ngOnInit() {
    if (isDevMode()) {
      this.devMode = isDevMode();
    }
  }
}
