import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesFormComponent } from './notes-form/notes-form.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'add', component: NotesFormComponent },
  { path: ':id', component: NotesDetailComponent },
  { path: ':id/edit', component: NotesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
