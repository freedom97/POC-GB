import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-validar-pertenencia-cuenta-portada',
  templateUrl: './portada-validar-pertenencia-cuenta.component.html'
})

export class PortadaValidarPertenenciaCuentaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verFamilias(){
    this.router.navigate(['lineas-negocio']);
  }
  verValidarPertenenciaCuenta(){
    this.router.navigate(['validar-pertenencia-cuenta']);
  }

}
