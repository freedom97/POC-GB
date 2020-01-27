import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagoterceros',
  templateUrl: './pagoterceros.component.html'
})
export class PagotercerosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
verPagoTerceros2(){
  this.router.navigate(['pagoterceros2']);
}
}
