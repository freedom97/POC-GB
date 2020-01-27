import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vinculacion-digital3',
  templateUrl: './vinculacion-digital3.component.html'
})
export class VinculacionDigital3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verVinculacionDigital4(){
  this.router.navigate(['vinculacion-digital4']);
}
VerVinculacionDigital(){
  this.router.navigate(['vinculacion-digital']);
}
}
