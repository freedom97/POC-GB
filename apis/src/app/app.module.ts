import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { APP_ROUTING } from "./app.routes";
import { ChartsModule } from "ng2-charts";
import { FormsModule} from '@angular/forms';
import { FileUploadModule } from "ng2-file-upload";
import { FileUploader } from "ng2-file-upload";
import { AngularFileUploaderModule } from "angular-file-uploader";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { LineasNegocioComponent } from "./components/lineas_de_negocio/lineas_de_negocio.component";


import { AutenticacionService } from "./servicios/autentication.service";

import { ProductosCaptacionComponent } from "./components/productos-captacion/productos-captacion.component";
import { AuthConciliacionBancariaComponent } from "./components/auth-conciliacion-bancaria/auth-conciliacion-bancaria.component";
import { CodigoQrManagement } from './components/codigoqr-productos/codigoqr-management/codigoqr-management.component';
import { ProductosFinanciacionComponent } from './components/productos-financiacion/productos-financiacion.component';
import { pruebaAPIQR } from './components/codigoqr-productos/codigoqr-management/pruebaAPI-QR/pruebaAPI-QR.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MediosPagosComponent } from './components/medios_de_pago/medios_de_pago.component';
import { ConciliacionPortada } from './components/productos-captacion/portada-conciliacion/portada-conciliacion.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SeguridadComponent} from './components/seguridad/seguridad.component'
import { PortadaConsultaInfoDocumento } from './components/seguridad/portada-consulta-infodocumento/portada-consulta-infodocumento.component';
import { ConsultaInfoDocumento } from './components/seguridad/portada-consulta-infodocumento/consulta-info-documento/consulta-info-documento.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ValidarPertenenciaCuentaComponent } from './components/productos-captacion/portada-validar-pertenencia-cuenta/validar-pertenencia-cuenta/validar-pertenencia-cuenta.component';
import { PortadaValidarPertenenciaCuentaComponent } from './components/productos-captacion/portada-validar-pertenencia-cuenta/portada-validar-pertenencia-cuenta.component';
import { FilialesAliadosComponent } from './components/filiales-aliados/filiales-aliados.component';
import { GirosNacionalesPortada } from './components/filiales-aliados/giros-nacionales-portada/giros-nacionales-portada.component';
import { GirosNacionales } from './components/filiales-aliados/giros-nacionales-portada/giros-nacionales/giros-nacionales.component';
import { GirosNacionales2 } from './components/filiales-aliados/giros-nacionales-portada/giros-nacionales2/giros-nacionales2.component';
import { PortadaCreditoVehiculoComponent } from './components/productos-financiacion/credito-vehiculo/portada_credito_vehiculo/portada_credito_vehiculo.component';
import { CreditoVehiculoComponent } from './components/productos-financiacion/credito-vehiculo/credito-vehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LineasNegocioComponent,
    ProductosCaptacionComponent,
    AuthConciliacionBancariaComponent,
    CodigoQrManagement,
    ProductosFinanciacionComponent,
    pruebaAPIQR,
    MediosPagosComponent,
    ConciliacionPortada,
    SeguridadComponent,
    PortadaConsultaInfoDocumento,
    ConsultaInfoDocumento,
    ValidarPertenenciaCuentaComponent,
    PortadaValidarPertenenciaCuentaComponent,
    FilialesAliadosComponent,
    GirosNacionalesPortada,
    GirosNacionales,
    GirosNacionales2,
    PortadaCreditoVehiculoComponent,
    CreditoVehiculoComponent




  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    BootstrapModalModule,
    ChartsModule,
    FormsModule,
    AngularFileUploaderModule,
    FileUploadModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule



  ],
  providers: [AutenticacionService],

  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {}
export class AppRoutingModule {}
