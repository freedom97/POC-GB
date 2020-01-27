import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-renovar-soat2',
  templateUrl: './renovar-soat2.component.html'
})
export class RenovarSoat2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verSoat(){
  this.router.navigate(['ver-soat']);
}
Pagar(){
  alert("Tu pago se realizó con éxito");
}
}
