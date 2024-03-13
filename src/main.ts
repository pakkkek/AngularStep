import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>{{ hobbyName }}</h2>
    <p>{{ hobbyDescription }}</p>
    <img src="assets/images/hobby.jpg" alt="hobby">
    <img src="assets/images/person.jpg" alt="person">
  `,
})
export class App {
  hobbyName: string = 'UI/UX Design';
  hobbyDescription: string = 'An exciting hobby that allows you to express your creativity and create impressive visual creations.';
}

bootstrapApplication(App);
