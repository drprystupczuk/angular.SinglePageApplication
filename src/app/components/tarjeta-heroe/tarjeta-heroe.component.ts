import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {


  @Input() heroe: any = {}; //El input quiere decir que el atributo heroe puede venir de afuera
  @Input() i:number;

  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.i]);
  }
}
