import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="/">{{title}}</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" *ngFor="let link of links">
            <a class="nav-link" [routerLink]="link.url" routerLinkActive="active">
              {{link.label}}
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="/en/">EN</a></li>
          <li><a class="nav-link" href="/es/">ES</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  public title = 'NX Demo';
  public links = [
    { label: 'Home', url: '/home' },
    { label: 'Notes', url: '/notes' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' }
  ];
}
