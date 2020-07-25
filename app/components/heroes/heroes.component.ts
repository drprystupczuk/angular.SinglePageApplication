import {Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from "../../services/heroes.service"; //la interfaz Heroe esta declarada en el service
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe [] = [];
  constructor(private heroesService:HeroesService, private router: Router) {
      //con agregar el parametro ya puedo utilizar el servicio
   }

  ngOnInit(): void {
    //ngOnInit se utiliza cuando la página ya está renderizada
    this.heroes = this.heroesService.getHeroes();

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}



