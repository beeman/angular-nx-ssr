import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h2>About</h2>
    <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
    <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
    <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
    <p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    <p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  `
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
