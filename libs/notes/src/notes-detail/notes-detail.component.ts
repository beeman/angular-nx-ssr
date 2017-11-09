import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-detail',
  template: `
    <pre>{{note | json}}</pre>
  `,
  styles: []
})
export class NotesDetailComponent implements OnInit {
  note = {};

  constructor(private service: NotesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.service.getNote(this.route.snapshot.params['id']).subscribe((res: any) => (this.note = res));
  }
}
