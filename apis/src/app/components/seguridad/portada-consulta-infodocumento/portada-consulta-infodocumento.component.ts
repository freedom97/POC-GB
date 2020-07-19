import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portada-consulta-infoDocumento',
  templateUrl: './portada-consulta-infodocumento.component.html'
})
export class PortadaConsultaInfoDocumento implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  consultarInfoDocumento(){
    this.router.navigate(['consultar-info-documento']);
  }

}
