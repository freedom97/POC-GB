
// Componente TS de los productos API's QR Code, es decir, es la visualización que se genera al oprimir el botón "conocer más"
//de los productos API's QR Code
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  // Tag identificador del componente que representa la visualización de los productos API's QR Code
  selector: 'app-codigoqr-conocermas',
  //Componente HTML de los productos API's QR Code
  templateUrl: './codigoqr-conocermas.component.html'
})
export class CodigoQrConocerMas implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verQRmanagement(){
    this.router.navigate(['codigoqr-management']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
}
