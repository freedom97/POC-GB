import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagoterceros-consultarbeneficiario',
  templateUrl: './pagoterceros-consultarbeneficiario.component.html'
})
export class PagotercerosConsultarbeneficiarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagos(){
  this.router.navigate(['pagos']);
}
}
