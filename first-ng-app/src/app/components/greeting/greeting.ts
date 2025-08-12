import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss'
})
export class Greeting {
message = input('Hello from the Greeting component!');

KeyPressed(event: KeyboardEvent) {
  console.log(event.key);
}
}
