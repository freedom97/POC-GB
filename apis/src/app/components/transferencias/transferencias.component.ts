import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html'
})
export class TransferenciasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}

verQR(){
  this.router.navigate(['codigoqr-management']);
}
}
