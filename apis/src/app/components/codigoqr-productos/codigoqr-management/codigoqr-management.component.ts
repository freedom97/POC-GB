import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-codigoqr-management',
  templateUrl: './codigoqr-management.component.html'

})

export class CodigoQrManagement implements OnInit {


  closeResult: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(private router:Router,private modalService: NgbModal,private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

  conocerMas(){
    this.router.navigate(['pruebaAPI-qr']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
