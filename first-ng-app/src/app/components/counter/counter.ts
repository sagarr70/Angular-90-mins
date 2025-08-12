import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
count = signal(0);

Increment() {
  this.count.set(this.count() + 1);
}

Reset() {
  this.count.set(0);
}

Decrement() {
  if (this.count() > 0) {
  this.count.set(this.count() - 1);
  }
}
}