import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-embargos-desembargos',
  templateUrl: './embargos-desembargos.component.html'
})
export class EmbargosDesembargosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
verFamiliaEmbargos(){
  this.router.navigate(['familia-embargos']);
}
verEmbargosDesembargos2(){
  this.router.navigate(['embargos-desembargos2']);
}
}
