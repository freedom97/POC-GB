import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-vinculacion-digital2',
  templateUrl: './vinculacion-digital2.component.html'
})
export class VinculacionDigital2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verVinculacionDigital3(){
    this.router.navigate(['vinculacion-digital3']);
  }
  verVinculacionDigital(){
    this.router.navigate(['vinculacion-digital']);
  }
}
