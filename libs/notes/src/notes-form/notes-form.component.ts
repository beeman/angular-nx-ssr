import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-form',
  template: `
    <h2>Add Note</h2>
    <form (submit)="submit($event)">
      <fieldset>
        <div class="form-group">
          <label for="exampleInputTitle">Title</label>
          <input [(ngModel)]="note.title" name="title" type="text" class="form-control" id="exampleInputTitle" placeholder="Note title">
        </div>
        <div class="form-group">
          <textarea [(ngModel)]="note.content" name="content" class="form-control" id="exampleNote" rows="3" placeholder="Write your note here"></textarea>
        </div>
        <button type="submit" class="btn btn-primary float-right">
          <i class="fa fa-fw fa-save"></i>
          Save
        </button>
      </fieldset>
    </form>
  `,
  styles: []
})
export class NotesFormComponent implements OnInit {
  note = {
    title: '',
    content: ''
  };

  constructor(private service: NotesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.service.getNote(this.route.snapshot.params['id']).subscribe((res: any) => (this.note = res));
    }
  }

  submit($event) {
    $event.preventDefault();
    this.service.upsertNote(this.note).subscribe(res => this.router.navigate(['/notes']));
  }
}
