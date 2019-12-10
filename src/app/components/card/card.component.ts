import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() img = "assets/img/budapest.jpg";
  @Input() titulo:string;
  @Input() descrip?: string;
  @Input() precio: number;

  ngOnInit() {
    //cuando declara afuera de init, tengo que agregar 'this'
    console.log(this.titulo);
    console.log("Hola! Soy el componente CARD");
  }

}
