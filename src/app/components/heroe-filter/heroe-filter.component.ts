import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from "../../services/heroes.service"; //la interfaz Heroe esta declarada en el service
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe-filter',
  templateUrl: './heroe-filter.component.html'
})
export class HeroeFilterComponent implements OnInit {

  heroes:Heroe [] = [];
termino:string;

  constructor(private activatedRoute:ActivatedRoute,private heroesService:HeroesService, private router: Router) {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
    })
   }

  ngOnInit(): void {
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}


