import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-codigoqr-management',
  templateUrl: './codigoqr-management.component.html'

})

export class CodigoQrManagement implements OnInit {


  closeResult: string;



  constructor(private router:Router,private modalService: NgbModal) {}

  ngOnInit() {

  }

  conocerMas(){
    this.router.navigate(['pruebaAPI-qr']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
  comenzar(){
    this.router.navigate(['pruebaAPI-qr']);
  }


}
