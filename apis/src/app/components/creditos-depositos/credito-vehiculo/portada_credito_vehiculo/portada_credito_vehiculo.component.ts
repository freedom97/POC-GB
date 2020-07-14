import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-portada-credito-vehiculo',
  templateUrl: './portada_credito_vehiculo.component.html',

})
export class PortadaCreditoVehiculoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

verCreditoVehiculo() {
  this.router.navigate(["credito-vehiculo"]);
}
}
