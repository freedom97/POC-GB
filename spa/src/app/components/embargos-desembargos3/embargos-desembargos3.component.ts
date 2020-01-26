import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-embargos-desembargos3',
  templateUrl: './embargos-desembargos3.component.html'
})
export class EmbargosDesembargos3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verEmbargosDesembargos2(){
    this.router.navigate(['embargos-desembargos2']);
  }
  verEmbargosDesembargos4(){
    this.router.navigate(['embargos-desembargos4']);
  }

}
