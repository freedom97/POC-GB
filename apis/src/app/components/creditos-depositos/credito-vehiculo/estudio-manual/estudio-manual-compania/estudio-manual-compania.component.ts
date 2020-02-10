import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-estudio-manual-compania',
  templateUrl: './estudio-manual-compania.component.html'
})
export class EstudioManualCompaniaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
verEstudioManualReferencias(){
  this.router.navigate(['estudio-manual-referencias']);
}
}
