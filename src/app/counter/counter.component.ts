import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

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
export class CounterComponent implements OnInit {
  @Input() numStart: string;
  @Input() formControlRef: FormControl;

  count = 4;

  ngOnInit(){
    if(+this.numStart > 0) {
      this.count = this.count + (+this.numStart);
    }
  }

  increase() {
    this.count++;
    this.formControlRef.setValue(this.count);
  }

  decrease() {
    this.count--;
    this.formControlRef.setValue(this.count);
  }
}
