import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({

  selector: 'app-familias',
  templateUrl: './familias.component.html'
})
export class FamiliasComponent {


  constructor(private router: Router) {
  }

verFamiliaRequerimientos(){
  this.router.navigate(['requerimientos-legales']);
}
verFamilias() {
  this.router.navigate(['familias']);
}
verRegistroPyme() {
  this.router.navigate(['/registro-pyme']);
}
verCargaDocumentosPyme() {
  this.router.navigate(['carga-documentos-pyme']);
}
verFamiliaRecaudos() {
  this.router.navigate(['/familia-recaudos']);
}
verFamiliaEmbargos(){
  this.router.navigate(['/familia-embargos']);
}
verFamiliaNominaFiliales() {
  this.router.navigate(['/familia-nomina-filiales']);
}
verFamiliaFilialesExterior() {
  this.router.navigate(['/familia-filiales-exterior']);
}

VerFamiliaAnalitica() {
  this.router.navigate(['/familia-analitica']);
}
verDetalleExtracto() {
this.router.navigate(['detalle-extracto']);
}
verRecomendacion() {
  this.router.navigate(['recomendacion']);
  }
  verLoading() {
    this.router.navigate(['loading']);
  }
  verFamiliaSeguros(){
    this.router.navigate(['familia-seguros']);
  }
  verEstudioPreliminar(){
    this.router.navigate(['estudio-preliminar']);
  }
  VerConciliacionBancaria(){
    this.router.navigate(['conciliacion-bancaria']);
  }
  verOfertasPersonalizadas(){
    this.router.navigate(['ofertas-personalizadas']);
  }
  verFamiliaPagos(){
    this.router.navigate(['pagos']);
  }
  verVinculacionDigital(){
    this.router.navigate(['vinculacion-digital']);
  }
}

