import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagonomina2',
  templateUrl: './pagonomina2.component.html'
})
export class Pagonomina2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagonomina3(){
  this.router.navigate(['pagonomina3']);
}
verPagos(){
  this.router.navigate(['pagos']);
}
}
