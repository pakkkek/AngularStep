import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <p>{{ monologue }}</p>
    <h2>Photo Gallery</h2>
    <div *ngFor="let photo of photos">
      <img [src]="photo" alt="Photo">
    </div>
  `,
})
export class App {
  name = 'Angular';
  monologue: string = `
    To be, or not to be, that is the question:
    Whether 'tis nobler in the mind to suffer
    The slings and arrows of outrageous fortune,
    Or to take arms against a sea of troubles
    And, by opposing, end them.
  `;
  photos: string[] = [
    'assets/images/car.jpg',
    'assets/images/logo.jpg',
    'assets/images/founder.jpg',
  ];
}

bootstrapApplication(App);
