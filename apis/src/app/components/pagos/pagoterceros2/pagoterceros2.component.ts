import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagoterceros2',
  templateUrl: './pagoterceros2.component.html'
})
export class Pagoterceros2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
verPagoTerceros3(){
  this.router.navigate(['pagoterceros3']);
}
}
