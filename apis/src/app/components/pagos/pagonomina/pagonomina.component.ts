import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagonomina',
  templateUrl: './pagonomina.component.html'
})
export class PagonominaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagonomina2(){
  this.router.navigate(['pagonomina2']);
}
verPagos(){
  this.router.navigate(['pagos']);
}
}
