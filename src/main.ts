import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Досвід роботи</h2>
      <p>{{ startDate }} - {{ endDate }} {{ jobTitle }}</p>
    </div>

    <div>
      <h2>Досвід роботи</h2>
      <p>{{ startDate }} - {{ endDate }} {{ jobTitle | uppercase }}</p>
    </div>

    <div>
      <h2 [ngStyle]="{'color': 'blue'}">Досвід роботи</h2>
      <p [ngClass]="{'highlight': true}">{{ startDate }} - {{ endDate }} {{ jobTitle | uppercase }}</p>
    </div>
  `,
  styleUrls: ['./global_styles.css']
})
export class App {
  startDate: number = 2022;
  endDate: number = 2024;
  jobTitle: string = 'ITStep';
}

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule ],
  declarations: [ App ],
  bootstrap:    [ App ]
})
export class AppModule {}

bootstrapApplication(AppModule);
