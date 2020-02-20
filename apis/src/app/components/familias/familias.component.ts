import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swiper from "swiper";

@Component({

  selector: 'app-familias',
  templateUrl: './familias.component.html'
})
export class FamiliasComponent implements OnInit {


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
  verTransferencias(){
    this.router.navigate(['transferencias']);
  }
  verVinculacionDigital(){
    this.router.navigate(['vinculacion-digital']);
  }
  verCreditosDepositos(){
    this.router.navigate(['creditos-depositos']);
  }
  ngOnInit() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

