import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-pagonomina3',
  templateUrl: './pagonomina3.component.html'
})
export class Pagonomina3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verConsultarLote(){
  this.router.navigate(['pagonomina-cosultarlote']);
}
verPagos(){
  this.router.navigate(['pagos']);
}
verPagoNomina(){
  this.router.navigate(['pagonomina']);
}
}
