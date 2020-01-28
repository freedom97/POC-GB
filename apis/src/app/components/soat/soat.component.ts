import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
import * as alertify from 'alertifyjs';//
import { element } from 'protractor';
@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html'
})
export class SoatComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verRenovarSoat(){

    //var placa1 = placas.includes("IOS145");
    let valor = (<HTMLInputElement>document.getElementById("placa")).value;
    if(valor == "IOS145" || valor == "JVE454"){
      this.router.navigate(['renovar-soat']);
    } else
    if(valor == "IOT352"){
      this.router.navigate(['adquirir-soat']);
    }else
    if(valor == "ABC123"){
      this.router.navigate(['renovar-soat2']);
    }
    else{
      alert("No tienes póliza verifica tus datos");
    }
    }

  verFamilias(){
    this.router.navigate(['familias']);
  }
}
