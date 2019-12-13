import { Component, OnInit } from '@angular/core';

import mascotas from "../../../assets/data/mascotas.js";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor() { }
  
  dataMascotas = mascotas;
  ngOnInit() {
    console.log(this.dataMascotas);
  }

}
