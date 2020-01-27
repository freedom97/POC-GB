import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagoproveedor3',
  templateUrl: './pagoproveedor3.component.html'
})
export class Pagoproveedor3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
verPagoProveedor(){
  this.router.navigate(['pagoproveedor']);
}
}
