import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../apps/web/src/environments/environment';

const getApiUrl = (endpoint = '') => `${environment.apiUrl}/api/${endpoint}`;

@Injectable()
export class NotesService {
  constructor(private http: HttpClient) {}

  getModel(modelName) {
    return this.http.get(getApiUrl(modelName));
  }

  getModelItem(modelName, modelId) {
    const apiUrl = getApiUrl([modelName, modelId].join('/'));

    return this.http.get(apiUrl);
  }

  postModel(modelName, data) {
    return this.http.post(getApiUrl(modelName), data);
  }

  putModel(modelName, id, data) {
    return this.http.put(getApiUrl(modelName) + '/' + id, data);
  }

  deleteModel(modelName, id) {
    return this.http.delete(getApiUrl(modelName) + '/' + id);
  }

  getNotes() {
    return this.getModel('Notes');
  }

  getNote(id) {
    return this.getModelItem('Notes', id);
  }

  upsertNote(note) {
    return note.id ? this.putModel('Notes', note.id, note) : this.postModel('Notes', note);
  }

  deleteNote(note) {
    return this.deleteModel('Notes', note.id);
  }
}
