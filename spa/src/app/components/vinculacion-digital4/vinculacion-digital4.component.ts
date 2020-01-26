import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vinculacion-digital4',
  templateUrl: './vinculacion-digital4.component.html'
})
export class VinculacionDigital4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}
VerVinculacionDigital3(){
  this.router.navigate(['vinculacion-digital3']);
}
}
