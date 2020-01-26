import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-auth-conciliacion-bancaria',
  templateUrl: './auth-conciliacion-bancaria.component.html'
})
export class AuthConciliacionBancariaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verCuentasConciliacionBancaria(){
  this.router.navigate(['cuentas-conciliacion-bancaria']);
}
verConciliacionBancaria(){
  this.router.navigate(['conciliacion-bancaria']);
}
verFamilias(){
  this.router.navigate(['familias']);
}
}
