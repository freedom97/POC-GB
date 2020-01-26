import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-familia-embargos',
  templateUrl: './familia-embargos.component.html'
})
export class FamiliaEmbargosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
verFamiliaEmbargos(){
  this.router.navigate(['familia-embargos']);
}
verFamilias(){
  this.router.navigate(['familias']);
}
verEmbargosDesembargos(){
  this.router.navigate(['embargos-desembargos']);
}
verFamiliaRequerimientos(){
  this.router.navigate(['requerimientos-legales']);
}
}
