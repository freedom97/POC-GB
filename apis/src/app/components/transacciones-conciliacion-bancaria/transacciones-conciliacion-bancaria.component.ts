import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-transacciones-conciliacion-bancaria',
  templateUrl: './transacciones-conciliacion-bancaria.component.html'
})
export class TransaccionesConciliacionBancariaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verCuentasConciliacionBancaria(){
  this.router.navigate(['cuentas-conciliacion-bancaria']);
}
verTransaccionesConciliadas(){
  this.router.navigate(['transacciones-conciliadas']);
}
verAuthConciliacionBancaria(){
  this.router.navigate(['auth-conciliacion-bancaria']);
}
}
