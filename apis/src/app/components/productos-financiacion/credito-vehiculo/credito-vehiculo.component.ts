import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";


@Component({
  selector: 'app-credito-vehiculo',
  templateUrl: './credito-vehiculo.component.html',
})
export class CreditoVehiculoComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  isLinear = false;
  isCodeQR = false;

  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
      firstCtrl2: ["", Validators.required],
      firstCtrl3: ["", Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  volverPortalCreditoVehiculo() {
    this.router.navigate(["portada-credito-vehiculo"]);
  }
  verFamilias() {
    this.router.navigate(["lineas-negocio"]);
  }

}
