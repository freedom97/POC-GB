import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-requerimientos-legales',
  templateUrl: './requerimientos-legales.component.html'
})
export class RequerimientosLegalesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}
verFamiliaEmbargos(){
  this.router.navigate(['familia-embargos']);
}
}
