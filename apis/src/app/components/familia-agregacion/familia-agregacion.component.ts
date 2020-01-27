import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-familia-agregacion',
  templateUrl: './familia-agregacion.component.html',

})
export class FamiliaAgregacionComponent  implements OnInit {

 constructor(private router: Router,
           ) { }
ngOnInit () {
    
}

  verRegistroPyme() {
    this.router.navigate(['/registro-pyme']);
  }
  verCargaDocumentosPyme() {
    this.router.navigate(['carga-documentos-pyme']);
  }
  verDetalleExtracto() {
    this.router.navigate(['detalle-extracto']);
  }
  verFamiliaAnalitica() {
    this.router.navigate(['familia-analitica']);
  }
}
