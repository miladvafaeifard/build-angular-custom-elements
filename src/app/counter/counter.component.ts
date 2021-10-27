import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increase()">+</button>
    {{ count }}
    <button (click)="decrease()">-</button>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  count = 0;

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}
