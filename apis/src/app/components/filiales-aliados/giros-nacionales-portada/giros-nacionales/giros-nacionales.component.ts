import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-giros-nacionales',
  templateUrl: './giros-nacionales.component.html'
})
export class GirosNacionales implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  isLinear = false;
  isCodeQR=false;



  constructor(private router:Router,private _formBuilder: FormBuilder) { }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],

    });
  }

  conocerMas(){
    this.router.navigate(['lineas-negocio']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
  volverGirosNacionalesPortada(){
    this.router.navigate(['giros-nacionales-portada']);
  }



}
