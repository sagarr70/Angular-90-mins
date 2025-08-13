import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  template: `
    <app-header></app-header>
    <main>
     <router-outlet />
    </main>
    
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `
  ],
})
export class App {
}
