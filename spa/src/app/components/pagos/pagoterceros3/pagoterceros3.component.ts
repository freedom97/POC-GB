import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-pagoterceros3',
  templateUrl: './pagoterceros3.component.html'
})
export class Pagoterceros3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verPagoTerceros(){
  this.router.navigate(['pagoterceros']);
}
}
