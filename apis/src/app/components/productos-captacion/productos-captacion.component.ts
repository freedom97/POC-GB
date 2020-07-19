import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-productos-captacion',
  templateUrl: './productos-captacion.component.html'
})
export class ProductosCaptacionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verFamilias(){
    this.router.navigate(['lineas-negocio']);
  }

  verConciliacion(){
    this.router.navigate(['conciliacion-portada']);
  }
  verPortadaValidarPertenenciaCuenta(){
    this.router.navigate(['validar-pertenencia-cuenta-portada']);
  }
}
