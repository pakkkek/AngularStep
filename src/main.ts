import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div>
  <h2>Цитати Білла Гейтса</h2>
  <ul>
    <li *ngFor="let quote of quotes">{{ quote }}</li>
  </ul>
  <h2>Біографія</h2>
  <p>{{ bio }}</p>
  <img src="./images/bill-gates.jpg" alt="Портрет Білла Гейтса">
  <h2>Додаткові ресурси</h2>
  <ul>
    <li><a href="https://en.wikipedia.org/wiki/Bill_Gates">Wikipedia</a></li>
    <li><a href="https://www.gatesfoundation.org/">Bill & Melinda Gates Foundation</a></li>
    <li><a href="https://www.gatesnotes.com/">Gates Notes</a></li>
    <li><a href="https://twitter.com/billgates">Twitter</a></li>
  </ul>
  </div>  
  `,
})
export class App {
  quotes: string[] = [
    "Patience is a key element of success",
    "If you think your teacher is tough, wait till you get boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    "Be nice to nerds. Chances are you'll end up working for one"
  ];

  bio: string = "Bill Gates is an American business magnate, software developer, philanthropist, and author. He is best known as the co-founder of Microsoft Corporation.";
}

bootstrapApplication(App);
