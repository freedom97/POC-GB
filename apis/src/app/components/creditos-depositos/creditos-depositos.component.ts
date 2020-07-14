import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-creditos-depositos',
  templateUrl: './creditos-depositos.component.html'
})
export class CreditosDepositos implements OnInit {

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
verPortadaCreditoVehiculo(){
  this.router.navigate(['portada-credito-vehiculo']);
}
}
