import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './pruebaAPI-QR.component.html'
})
export class pruebaAPIQR implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }

  conocerMas(){
    this.router.navigate(['familias']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }

}
