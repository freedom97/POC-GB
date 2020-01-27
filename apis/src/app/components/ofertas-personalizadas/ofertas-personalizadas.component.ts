import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ofertas-personalizadas',
  templateUrl: './ofertas-personalizadas.component.html'
})
export class OfertasPersonalizadasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}
verOfertasComerciales(){
  this.router.navigate(['ofertas-comerciales']);
}
}
