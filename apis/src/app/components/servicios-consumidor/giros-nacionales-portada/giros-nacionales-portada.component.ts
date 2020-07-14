import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'giros-nacionales-portada',
  templateUrl: './giros-nacionales-portada.component.html'

})

export class GirosNacionalesPortada implements OnInit {


  closeResult: string;



  constructor(private router:Router,private modalService: NgbModal) {}

  ngOnInit() {

  }


  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
  comenzar1(){
    this.router.navigate(['giros-nacionales']);
  }
  comenzar2(){
    this.router.navigate(['giros-nacionales2']);
  }



}
