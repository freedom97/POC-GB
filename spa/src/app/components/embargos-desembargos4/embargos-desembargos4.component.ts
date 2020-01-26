import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-embargos-desembargos4',
  templateUrl: './embargos-desembargos4.component.html'
})
export class EmbargosDesembargos4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verEmbargosDesembargos3(){
  this.router.navigate(['embargos-desembargos3']);
}
VerFamilias(){
  this.router.navigate(['familias']);
}
}
