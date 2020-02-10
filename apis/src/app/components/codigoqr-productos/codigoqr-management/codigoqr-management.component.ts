import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-codigoqr-management',
  templateUrl: './codigoqr-management.component.html'
})
export class CodigoQrManagement implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  conocerMas(){
    this.router.navigate(['pruebaAPI-qr']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
}
