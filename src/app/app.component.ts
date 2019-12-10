import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  img = "assets/img/budapest.jpg";
  titulo = "Austria";
  descrip = "Esto es un pasaje";
  precio = 1000;
}
