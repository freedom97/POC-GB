import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-filiales-aliados',
  templateUrl: './filiales-aliados.component.html'
})
export class FilialesAliadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verFamilias(){
    this.router.navigate(['lineas-negocio']);
  }


  verPortadaGirosNacionales(){
    this.router.navigate(['giros-nacionales-portada']);
  }
}
