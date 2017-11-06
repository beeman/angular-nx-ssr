import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>Contact</h2>
    <form (submit)="submit($event)">
      <fieldset>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleTextarea">Comment</label>
          <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Leave your comment here"></textarea>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input">
            Subscribe me to your newsletter
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </fieldset>
    </form>
  `,
})
export class ContactComponent {
  submit($event) {
    $event.preventDefault();
    window.alert('Sending the form is not implemented!')
  }
}
