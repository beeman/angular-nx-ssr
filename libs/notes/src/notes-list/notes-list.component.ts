import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-list',
  template: `
    <a routerLink="add" class="btn btn-success float-right mb-2">
      <i class="fa fa-fw fa-plus"></i>
      Add Note
    </a>
    <table class="table table-hover table-striped table-bordered">
      <tbody>
      <tr *ngFor="let note of notes">
        <td>
          <a [routerLink]="[note.id]">
            {{note.title}}
          </a>
          <span class="float-right">
            <a [routerLink]="[note.id, 'edit']" class="btn btn-outline-primary">
              <i class="fa fa-fw fa-pencil"></i>
            </a>
            <button (click)="delete(note)" class="btn btn-outline-danger">
              <i class="fa fa-fw fa-trash"></i>
            </button>
          </span>
          <br>
          {{note.modified | date: 'medium' }}
        </td>
      </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class NotesListComponent implements OnInit {
  notes: any[] = [];

  constructor(private service: NotesService) {}

  ngOnInit() {
    this.refresh();
  }

  delete(note) {
    if (window.confirm('Are you sure you want to delete this note?')) {
      this.service.deleteNote(note).subscribe(() => this.refresh());
    }
  }

  refresh() {
    this.service.getNotes().subscribe((res: any) => (this.notes = res));
  }
}
