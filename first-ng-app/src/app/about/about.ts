import { Component, signal } from '@angular/core';
import { AboutItems } from '../components/about-items/about-items';

@Component({
  selector: 'app-about',
  imports: [AboutItems],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  message = signal('About Us!');
  message2 = signal('More About Us!');
}
