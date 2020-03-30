import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface documentoID {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-consulta-infoDocumento',
  templateUrl: './consulta-info-documento.component.html'
})
export class ConsultaInfoDocumento implements OnInit {
  docId: documentoID[] = [
    {value: 'CC', viewValue: 'CC'},
    {value: 'CE', viewValue: 'CE'},
    {value: 'PAS', viewValue: 'PAS'}
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  isLinear = false;
  isCodeQR=false;
  number5="5";
  number4="4";
  number3="3";
  number2="2";
  number1="1";
  number0="0";
  number9="9";
  number7="7";
  number8="8";
  number6="6";
  flag=false;
  result="";

  constructor(private router: Router,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({

      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
      firstCtrl4: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({

      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required],
      secondCtrl4: ['', Validators.required],

    });
  }



  volverPortalConsultaInfoDocumento(){
    this.router.navigate(['consultar-infoDocumento-portada']);
  }
  getNumber0(){
    this.result+=this.number0;
  }
  getNumber1(){
    this.result+=this.number1;
  }
  getNumber2(){
    this.result+=this.number2;
  }
  getNumber3(){
    this.result+=this.number3;
  }
  getNumber4(){
    this.result+=this.number4;
  }
  getNumber5(){
    this.result+=this.number5;
  }
  getNumber6(){
    this.result+=this.number6;
  }
  getNumber7(){
    this.result+=this.number7;
  }
  getNumber8(){
    this.result+=this.number8;
  }
  getNumber9(){
    this.result+=this.number9;
  }
  deletePassword(){
    if(this.result[(this.result.length)-1]!=="" && this.flag==false){
      var palabra=this.result;

      this.result= palabra[palabra.length-1].replace(palabra[palabra.length-1],'');
      this.flag=true;
    }
    this.flag=false;


  }

}
