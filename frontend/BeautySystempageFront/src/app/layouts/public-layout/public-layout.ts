import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../component/footer/footer';
import { Navbar } from '../../navbar/navbar';
import { Home } from '../../home/home';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet,Navbar, Footer, Home],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {

}
