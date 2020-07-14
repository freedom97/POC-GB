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
  verProductosFinanciacion(){
    this.router.navigate(['productos-financiacion']);
  }
  verVerificacionDocIdentidad(){
    this.router.navigate(['verificar-doc-identidad']);
  }
  verServiciosConsumidor(){
    this.router.navigate(['servicios-consumidor']);
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

