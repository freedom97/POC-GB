import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-preliminar2',
  templateUrl: './estudio-preliminar2.component.html'
})
export class EstudioPreliminar2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verEstudioPreliminarCliente(){
    this.router.navigate(['estudio-preliminar-cliente']);
  }
  verEstudioPreliminar(){
    this.router.navigate(['estudio-preliminar']);
  }
}
