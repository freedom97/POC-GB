import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagoproveedor',
  templateUrl: './pagoproveedor.component.html'
})
export class PagoproveedorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
verPagoProveedor2(){
  this.router.navigate(['pagoproveedor2']);
}
}
