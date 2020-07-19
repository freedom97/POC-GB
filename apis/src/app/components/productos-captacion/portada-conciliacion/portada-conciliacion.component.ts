import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-conciliacion-portada',
  templateUrl: './portada-conciliacion.component.html'
})
export class ConciliacionPortada implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verFamilias(){
    this.router.navigate(['lineas-negocio']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }

}
