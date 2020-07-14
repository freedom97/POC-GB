import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-servicios-consumidor',
  templateUrl: './servicios-consumidor.component.html'
})
export class ServiciosConsumidorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verFamilias(){
    this.router.navigate(['familias']);
  }


  verPortadaGirosNacionales(){
    this.router.navigate(['giros-nacionales-portada']);
  }
}
