import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div>
  <h1>
    Моє резюме
  </h1>
  <img src="./images/profile.jpg" alt="Моя фотографія">
  <div>
  <h2>Досвід роботи</h2>
  <p>2022 - 2024 ITStep</p>
  </div>
  <div>
  <h2>Навички та сертифікати</h2>
  <p>Programming languages: C/C++, C#, HTML/CSS, JavaScript</p>
  </div>
  <div>
    <h2>Мої ресурси:</h2>
    <ul>
      <li><a href="https://github.com/pakkkek">GitHub</a></li>
    </ul>
  </div>
  </div>
  `,
})
export class App {
  
}

bootstrapApplication(App);
