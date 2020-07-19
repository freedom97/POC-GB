import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html'
})
export class SeguridadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  portada_consulta_infodocumento(){
    this.router.navigate(['consultar-infoDocumento-portada']);
  }
}
