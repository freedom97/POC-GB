import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estudio-preliminar-actividad',
  templateUrl: './estudio-preliminar-actividad.component.html',
  styles: [`
  .ng-invalid.ng-touched{
    border: 1px solid red;
  }
  .ng-valid:not(form){
    border: 1px solid green;
  }
  `]
})
export class EstudioPreliminarActividadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
guardar(formulario:NgForm){
console.log(formulario);
}
}
