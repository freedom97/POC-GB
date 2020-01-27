import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagoproveedor2',
  templateUrl: './pagoproveedor2.component.html'
})
export class Pagoproveedor2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
verPagoProveedor3(){
  this.router.navigate(['pagoproveedor3']);
}
}
