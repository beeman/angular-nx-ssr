import { Model } from '@mean-expert/model';
/**
 * @module Note
 * @description
 * Write a useful Note Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    customRemote: {
      returns: { arg: 'result', type: 'array' },
      http: { path: '/custom-remote-method', verb: 'get' }
    }
  }
})
class Note {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {}

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('Note: This is a Before Save Hook');
    next();
  }
  // Example Remote Method
  customRemote(next: Function): void {
    this.model.find(next);
  }
}

module.exports = Note;
