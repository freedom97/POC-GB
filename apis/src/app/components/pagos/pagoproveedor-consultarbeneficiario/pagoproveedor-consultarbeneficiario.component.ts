import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagoproveedor-consultarbeneficiario',
  templateUrl: './pagoproveedor-consultarbeneficiario.component.html'
})
export class PagoproveedorConsultarbeneficiarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
}
