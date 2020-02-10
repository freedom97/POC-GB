import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-preliminar',
  templateUrl: './estudio-preliminar.component.html'
})
export class EstudioPreliminarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verFamilias(){
  this.router.navigate(['familias']);
}
verEstudioPreliminar2(){
  this.router.navigate(['estudio-preliminar2']);
}
verEstudioFinalCliente(){
  this.router.navigate(['estudio-final-cliente']);
}
verEstudioManualSuplementarios(){
  this.router.navigate(['estudio-manual-suplementarios']);
}
}
