import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estudio-preliminar-cliente',
  templateUrl: './estudio-preliminar-cliente.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  .ng-valid:not(form){
    border: 1px solid green;
  }
  `]
})
export class EstudioPreliminarClienteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verEstudioPreliminarVehiculo(){
    this.router.navigate(['estudio-preliminar-vehiculo']);
  }
 
 guardar(formulario:NgForm) {
   console.log(formulario);
 }
}
