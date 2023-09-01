import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{ counter }}</h3>
    <button (click) ="increaseBy(1)" class="btn btn-primary mx-2">+1</button>
    <button (click)="reset()" class="btn btn-primary mx-2">Reset</button>
    <button (click)="decreaseBy(1)" class="btn btn-primary mx-2">-1</button>

  `,
})
export class CounterComponent {
  public counter: number = 10;

  reset() {
    this.counter = 10;
  }

  increaseBy(value: number):void {
    this.counter += value;
  }

  decreaseBy(value: number):void {
    this.counter -= value;
  }
}
