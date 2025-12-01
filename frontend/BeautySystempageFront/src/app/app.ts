import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Navbar } from "./navbar/navbar";
import { Footer } from "./component/footer/footer";
import { Hero } from "./hero/hero";
import { Beneficios } from "./beneficios/beneficios";
import { ComoFunciona } from "./como-funciona/como-funciona";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    Navbar,
    Footer,
    Hero,
    Beneficios,
    ComoFunciona
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('BeautySystempageFront');
}

