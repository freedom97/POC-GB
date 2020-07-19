import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-productos-financiacion',
  templateUrl: './productos-financiacion.component.html'
})
export class ProductosFinanciacionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['lineas-negocio']);
}

verPortadaCreditoVehiculo(){
  this.router.navigate(['portada-credito-vehiculo']);
}
}
