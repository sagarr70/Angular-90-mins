import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-items',
  imports: [],
  templateUrl: './about-items.html',
  styleUrl: './about-items.scss'
})
export class AboutItems {
     message = input('Hello From About');
     message2 = input('Hello From About 2');
}
