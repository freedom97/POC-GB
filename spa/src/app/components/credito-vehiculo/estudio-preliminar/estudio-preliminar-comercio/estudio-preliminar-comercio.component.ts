import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-preliminar-comercio',
  templateUrl: './estudio-preliminar-comercio.component.html'
})
export class EstudioPreliminarComercioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verEstudioPreliminarActividad(){
  this.router.navigate(['estudio-preliminar-actividad']);
}
}
