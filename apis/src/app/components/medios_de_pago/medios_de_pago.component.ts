import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-medios_de_pago',
  templateUrl: './medios_de_pago.component.html'
})
export class MediosPagosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['lineas-negocio']);
}

verQR(){
  this.router.navigate(['codigoqr-management']);
}
}
