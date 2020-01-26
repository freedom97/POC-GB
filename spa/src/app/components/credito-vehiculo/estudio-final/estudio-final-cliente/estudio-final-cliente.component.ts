import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-final-cliente',
  templateUrl: './estudio-final-cliente.component.html'
})
export class EstudioFinalClienteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verEstudioFinalEconomicos(){
    this.router.navigate(['estudio-final-economicos']);
      }
}
