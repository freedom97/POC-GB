import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-preliminar-vehiculo',
  templateUrl: './estudio-preliminar-vehiculo.component.html'
})
export class EstudioPreliminarVehiculoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verEstudioPreliminarComercio(){
    this.router.navigate(['estudio-preliminar-comercio']);
  }
}
