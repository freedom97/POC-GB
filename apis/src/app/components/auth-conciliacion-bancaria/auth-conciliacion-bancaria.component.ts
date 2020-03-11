import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
export interface PeriodicElement {
  fechacontable: string;
  fechatransaccion: string;
  nombre: string;
  referencia: string;
  tipodecuenta: string;
  Valor: string;
}
export interface PeriodicElement2 {
  fechacontable: string;
  fechatransaccion: string;
  nombre: string;
  referencia: string;
  tipodecuenta: string;
  Valor: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/01', nombre: 'Retiro', referencia: '12A',tipodecuenta:'Ahorros',Valor:'$650,000.00'},
  {fechatransaccion: '2019/04/20', fechacontable: '2019/04/05', nombre: 'Abono', referencia: '',tipodecuenta:'Ahorros',Valor:'$300.00'},
  {fechatransaccion: '2019/04/20', fechacontable: '2019/04/10', nombre: 'Retiro', referencia: '125',tipodecuenta:'Ahorros',Valor:'$200,000.00'},
  {fechatransaccion: '2019/04/20', fechacontable: '2019/04/15', nombre: 'Transferencia', referencia: '126',tipodecuenta:'Ahorros',Valor:'$35,000.00'},
  {fechatransaccion: '2019/04/20', fechacontable: '2019/04/20', nombre: 'Compra', referencia: '',tipodecuenta:'Ahorros',Valor:'$-85.00'},
  {fechatransaccion: '2019/04/20', fechacontable: '2019/04/20', nombre: 'Retiro', referencia: '1B7',tipodecuenta:'Ahorros',Valor:'$-85.00'},
  {fechatransaccion: '2019/04/20', fechacontable: '2019/04/20', nombre: 'Compra', referencia: '',tipodecuenta:'Ahorros',Valor:'$100,000.00'},
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/01', nombre: 'Compra', referencia: '123',tipodecuenta:'Ahorros',Valor:'$650,000.00'},
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/05', nombre: 'Abono', referencia: '28S',tipodecuenta:'Ahorros',Valor:'$300.00'},
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/10', nombre: 'Abono', referencia: 'AAA',tipodecuenta:'Ahorros',Valor:'$200,000.00'},
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/15', nombre: 'Retiro', referencia: '',tipodecuenta:'Ahorros',Valor:'$35,000.00'},
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/20', nombre: 'Compra', referencia: '85Y',tipodecuenta:'Ahorros',Valor:'$-85.00'},
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/20', nombre: 'Retiro', referencia: 'P17',tipodecuenta:'Ahorros',Valor:'$-85.00'},
  {fechatransaccion: '2019/04/01', fechacontable: '2019/04/20', nombre: 'Transferencia', referencia: '',tipodecuenta:'Ahorros',Valor:'$100,000.00'},
];
@Component({
  selector: 'app-auth-conciliacion-bancaria',
  templateUrl: './auth-conciliacion-bancaria.component.html'
})
export class AuthConciliacionBancariaComponent implements OnInit {
  //Variables
  displayedColumns: string[] = ['select','fechatransaccion', 'fechacontable', 'nombre', 'referencia', 'tipodecuenta','Valor'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);
  selection = new SelectionModel<PeriodicElement>(true, []);
  selection2 = new SelectionModel<PeriodicElement2>(true, []);


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
  constructor(private router:Router,private _formBuilder: FormBuilder) { }
//Funciones o métodos
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

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
    }

    //TABLA BANCOLOMBIA
      /** Whether the number of selected elements matches the total number of rows. */
      isAllSelected2() {
        const numSelected = this.selection2.selected.length;
        const numRows = this.dataSource2.data.length;
        return numSelected === numRows;
      }

      /** Selects all rows if they are not all selected; otherwise clear selection. */
      masterToggle2() {
        this.isAllSelected2() ?
            this.selection2.clear() :
            this.dataSource2.data.forEach(row => this.selection2.select(row));
      }

      /** The label for the checkbox on the passed row */
      checkboxLabel2(row?: PeriodicElement2): string {
        if (!row) {
          return `${this.isAllSelected2() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
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
volverPortalConciliacion(){
  this.router.navigate(['conciliacion-portada']);
}
verFamilias(){
  this.router.navigate(['familias']);
}
}
