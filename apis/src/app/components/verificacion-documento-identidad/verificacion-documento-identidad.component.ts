import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verificar-doc-identidad',
  templateUrl: './verificacion-documento-identidad.component.html'
})
export class VerificarDocIdentidad implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  portada_consulta_infodocumento(){
    this.router.navigate(['consultar-infoDocumento-portada']);
  }
}
