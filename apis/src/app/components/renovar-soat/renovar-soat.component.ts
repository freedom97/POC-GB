import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-renovar-soat',
  templateUrl: './renovar-soat.component.html'
})
export class RenovarSoatComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }
verSoat(){
  this.router.navigate(['ver-soat']);
}
Pagar(){
  alert("Pago realizado con éxito");
}
}
