import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swiper from "swiper";

@Component({

  selector: 'app-lineas-negocio',
  templateUrl: './lineas_de_negocio.component.html'
})
export class LineasNegocioComponent implements OnInit {


  constructor(private router: Router) {
  }

verFamiliaRequerimientos(){
  this.router.navigate(['requerimientos-legales']);
}

verFamilias() {
  this.router.navigate(['lineas-negocio']);
}


  VerProductosCaptacion(){
    this.router.navigate(['productos-captacion']);
  }

  verMediosPago(){
    this.router.navigate(['medios-pago']);
  }

  verProductosFinanciacion(){
    this.router.navigate(['productos-financiacion']);
  }
  verSeguridad(){
    this.router.navigate(['seguridad']);
  }
  verFilialesAliados(){
    this.router.navigate(['filiales-aliados']);
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

