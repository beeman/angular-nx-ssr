import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDetailComponent } from './notes-detail.component';

describe('NotesDetailComponent', () => {
  let component: NotesDetailComponent;
  let fixture: ComponentFixture<NotesDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NotesDetailComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
