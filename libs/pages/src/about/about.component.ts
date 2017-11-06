import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h2>About</h2>
    <p *ngFor="let line of lines" [class]="line.class" [innerHtml]="line.text"></p>
  `
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  lines = [
    { class: 'text-primary', text: 'This project brings together a lot of good stuff:' },
    { class: 'text-muted', text: 'The repository is structured using <a href="https://github.com/nrwl/nx">@nrwl/nx</a>' },
    { class: 'text-info', text: `This app runs on <a href="https://angular.io/">Angular v${VERSION.full}</a>` },
    { class: 'text-success', text: `Server Side Rendering by <a href="https://github.com/angular/universal">Angular Universal</a>` },
    { class: 'text-warning', text: `Support for running in a <a href="https://docker.io">Docker</a> container` },
    { class: 'text-danger', text: `Support for hosting on <a href="https://docker.io">now.sh</a>` },
  ]
}
