import { Component } from '@angular/core';
import { NavbarPerfilUsuario } from "../../component/navbar/navbar";
import { RouterModule } from "@angular/router";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [NavbarPerfilUsuario, RouterModule, Footer],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css',
})
export class PrivateLayout {

}
