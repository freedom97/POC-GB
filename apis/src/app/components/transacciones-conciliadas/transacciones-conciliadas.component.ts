import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-transacciones-conciliadas',
  templateUrl: './transacciones-conciliadas.component.html'
})
export class TransaccionesConciliadasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verTransaccionesConciliacionBancaria(){
  this.router.navigate(['transacciones-conciliacion-bancaria']);
}
verFamilias(){
  this.router.navigate(['familias']);
}
}
