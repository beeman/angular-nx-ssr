import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesService } from './notes.service';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesFormComponent } from './notes-form/notes-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, NotesRoutingModule],
  declarations: [NotesListComponent, NotesDetailComponent, NotesFormComponent],
  providers: [NotesService]
})
export class NotesModule {}
