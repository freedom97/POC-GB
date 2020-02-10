import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-manual-suplementarios',
  templateUrl: './estudio-manual-suplementarios.component.html'
})
export class EstudioManualSuplementariosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verEstudioManualCompania(){
  this.router.navigate(['estudio-manual-compania']);
}
}
