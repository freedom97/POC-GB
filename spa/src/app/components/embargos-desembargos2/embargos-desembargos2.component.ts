import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-embargos-desembargos2',
  templateUrl: './embargos-desembargos2.component.html'
})
export class EmbargosDesembargos2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamiliaEmbargos(){
  this.router.navigate(['familia-embargos']);
}
verEmbargosDesembargos(){
  this.router.navigate(['embargos-desembargos']);
}
verEmbargosDesembargos3(){
  this.router.navigate(['embargos-desembargos3']);
}
}
