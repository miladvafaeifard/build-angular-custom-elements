import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector){}

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.get('test-counter') || customElements.define('test-counter', customElement);
  } 
 }
