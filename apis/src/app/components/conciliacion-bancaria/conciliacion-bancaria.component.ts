import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-conciliacion-bancaria',
  templateUrl: './conciliacion-bancaria.component.html'
})
export class ConciliacionBancariaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verFamilias(){
    this.router.navigate(['familias']);
  }

  verConciliacion(){
    this.router.navigate(['conciliacion-portada']);
  }
}
