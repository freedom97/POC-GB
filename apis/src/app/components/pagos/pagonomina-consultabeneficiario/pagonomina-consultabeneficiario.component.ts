import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagonomina-consultabeneficiario',
  templateUrl: './pagonomina-consultabeneficiario.component.html'
})
export class PagonominaConsultabeneficiarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
}
