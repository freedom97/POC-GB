import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-conciliacion-bancaria',
  templateUrl: './cuentas-conciliacion-bancaria.component.html'
})
export class CuentasConciliacionBancariaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verTransaccionesConciliacionBancaria(){
  this.router.navigate(['transacciones-conciliacion-bancaria']);
}
verAuthConciliacionBancaria(){
  this.router.navigate(['auth-conciliacion-bancaria']);
}
}
