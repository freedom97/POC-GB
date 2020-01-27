import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-familia-seguros',
  templateUrl: './familia-seguros.component.html'
})
export class FamiliaSegurosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
verSoat(){
  this.router.navigate(['ver-soat']);
}
verFamilias(){
  this.router.navigate(['familias']);
}
}
