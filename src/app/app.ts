import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

interface Fruit {
  name: string;
  color: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  basket: Fruit[] = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Grapes', color: 'Green' }
  ];
}