import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <app-counter numStart="2" [formControlRef]="form"></app-counter>
    {{ form.value }}
  `,
})
export class AppComponent {
  form = new FormControl(0);
}
