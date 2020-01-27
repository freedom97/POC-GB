import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vinculacion-digital',
  templateUrl: './vinculacion-digital.component.html'
})
export class VinculacionDigitalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verVinculacionDigital2(){
  this.router.navigate(['vinculacion-digital2']);
}
VerFamilias(){
  this.router.navigate(['familias']);
}
}
