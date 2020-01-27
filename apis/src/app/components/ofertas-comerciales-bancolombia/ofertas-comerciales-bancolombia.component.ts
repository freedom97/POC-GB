import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ofertas-comerciales-bancolombia',
  templateUrl: './ofertas-comerciales-bancolombia.component.html'
})
export class OfertasComercialesBancolombiaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
VerOfertasComercialesBancolombia(){
this.router.navigate(['ofertas-comerciales-bancolombia2']);
}
verOfertasComerciales(){
  this.router.navigate(['ofertas-comerciales']);
}
}
