import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface UserData {
  reference: string;
  nameTransaction: string;
  date: string;
  accountingDate: string;
  amount:string;
  typeTransaction:string;
}

/** Constants used to fill up our data base. */
const MONTHS: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubbre",
  "Noviembre",
  "Diciembre",

];
const NAMES: string[] = [
  "Transferencia",
  "Abono",
  "Compra",
  "Retiro",

];
const TYPES: string[] = [
  "CREDITO",
  "DEBITO",
];

@Component({
  selector: "validar-pertenencia-cuenta",
  templateUrl: "./validar-pertenencia-cuenta.component.html",
})
export class ValidarPertenenciaCuentaComponent implements OnInit {
  //Variables
  displayedColumns: string[] = ["accountingDate", "date", "nameTransaction", "reference","amount","typeTransaction"];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  isLinear = false;
  isCodeQR = false;


  constructor(private router: Router, private _formBuilder: FormBuilder) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser());

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  //Funciones o métodos
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
      firstCtrl2: ["", Validators.required],
      firstCtrl3: ["", Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //TABLA BANCOLOMBIA

  volverPortalConciliacion() {
    this.router.navigate(["conciliacion-portada"]);
  }
  verFamilias() {
    this.router.navigate(["familias"]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    " ";

  return {
    nameTransaction: name,
    accountingDate:MONTHS[Math.round(Math.random() * (MONTHS.length - 1))]+" "+Math.round(Math.random() * 31).toString(),
    date: MONTHS[Math.round(Math.random() * (MONTHS.length - 1))]+" "+Math.round(Math.random() * 31).toString(),
    reference:"",
    amount:Math.round(Math.random() * 10000).toString(),
    typeTransaction:TYPES[Math.round(Math.random() * (TYPES.length - 1))]
  };
}
