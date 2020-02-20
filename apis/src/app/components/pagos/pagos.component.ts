import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html'
})
export class PagosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}
verPagoNomina(){
  this.router.navigate(['pagonomina']);
}
verPagoProveedor(){
  this.router.navigate(['pagoproveedor']);
}
verPagoTerceros(){
  this.router.navigate(['pagoterceros']);
}

}
