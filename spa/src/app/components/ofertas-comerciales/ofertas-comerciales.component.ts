import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ofertas-comerciales',
  templateUrl: './ofertas-comerciales.component.html'
})
export class OfertasComercialesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verOfertasComerciales(){
  this.router.navigate(['ofertas-comerciales']);
}
verOfertasComercialesBancolombia(){
  this.router.navigate(['ofertas-comerciales-bancolombia']);
}
verFamilias(){
this.router.navigate(['familias']);
}
}
