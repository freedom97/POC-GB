import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ofertas-comerciales-bancolombia2',
  templateUrl: './ofertas-comerciales-bancolombia2.component.html'
})
export class OfertasComercialesBancolombia2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verOfertasComerciales(){
  this.router.navigate(['ofertas-comerciales']);
}
}
