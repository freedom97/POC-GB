import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModalModule} from 'ng2-bootstrap-modal';
import {APP_ROUTING} from './app.routes';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FamiliasComponent } from './components/familias/familias.component';
import { FamiliaAgregacionComponent } from './components/familia-agregacion/familia-agregacion.component';
import { CargaDocumentosPymeComponent } from './components/carga-documentos-pyme/carga-documentos-pyme.component';
import { FamiliaAnaliticaComponent } from './components/familia-analitica/familia-analitica.component';
import { EnvioDocumentosPymeComponent } from './components/envio-documentos-pyme/envio-documentos-pyme.component';
import { DetalleExtractoComponent } from './components/detalle-extracto/detalle-extracto.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { CuentaAhorrosComponent } from './components/cuenta-ahorros/cuenta-ahorros.component';
import { CuentaCorrienteComponent } from './components/cuenta-corriente/cuenta-corriente.component';
import { AutenticacionService } from './servicios/autentication.service';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { CuentaInversionComponent } from './components/cuenta-inversion/cuenta-inversion.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FamiliaEmbargosComponent } from './components/familia-embargos/familia-embargos.component';
import { RequerimientosLegalesComponent } from './components/requerimientos-legales/requerimientos-legales.component';
import { EmbargosDesembargosComponent } from './components/embargos-desembargos/embargos-desembargos.component';
import { EmbargosDesembargos2Component } from './components/embargos-desembargos2/embargos-desembargos2.component';
import { EmbargosDesembargos3Component } from './components/embargos-desembargos3/embargos-desembargos3.component';
import { EmbargosDesembargos4Component } from './components/embargos-desembargos4/embargos-desembargos4.component';
import { FamiliaSegurosComponent } from './components/familia-seguros/familia-seguros.component';
import { SoatComponent } from './components/soat/soat.component';
import { RenovarSoatComponent } from './components/renovar-soat/renovar-soat.component';
import { AdquirirSoatComponent } from './components/adquirir-soat/adquirir-soat.component';
import { EstudioPreliminarComponent } from './components/credito-vehiculo/estudio-preliminar/estudio-preliminar.component';
import { EstudioPreliminar2Component } from './components/credito-vehiculo/estudio-preliminar/estudio-preliminar2/estudio-preliminar2.component';
import { EstudioPreliminarClienteComponent } from './components/credito-vehiculo/estudio-preliminar/estudio-preliminar-cliente/estudio-preliminar-cliente.component';
import { EstudioPreliminarVehiculoComponent } from './components/credito-vehiculo/estudio-preliminar/estudio-preliminar-vehiculo/estudio-preliminar-vehiculo.component';
import { EstudioPreliminarComercioComponent } from './components/credito-vehiculo/estudio-preliminar/estudio-preliminar-comercio/estudio-preliminar-comercio.component';
import { EstudioPreliminarActividadComponent } from './components/credito-vehiculo/estudio-preliminar/estudio-preliminar-actividad/estudio-preliminar-actividad.component';
import { EstudioFinalClienteComponent } from './components/credito-vehiculo/estudio-final/estudio-final-cliente/estudio-final-cliente.component';
import { EstudioFinalEconomicosComponent } from './components/credito-vehiculo/estudio-final/estudio-final-economicos/estudio-final-economicos.component';
import { EstudioFinalFinancierosComponent } from './components/credito-vehiculo/estudio-final/estudio-final-financieros/estudio-final-financieros.component';
import { EstudioManualSuplementariosComponent } from './components/credito-vehiculo/estudio-manual/estudio-manual-suplementarios/estudio-manual-suplementarios.component';
import { EstudioManualCompaniaComponent } from './components/credito-vehiculo/estudio-manual/estudio-manual-compania/estudio-manual-compania.component';
import { EstudioManualReferenciasComponent } from './components/credito-vehiculo/estudio-manual/estudio-manual-referencias/estudio-manual-referencias.component';
import { ConciliacionBancariaComponent } from './components/conciliacion-bancaria/conciliacion-bancaria.component';
import { AuthConciliacionBancariaComponent } from './components/auth-conciliacion-bancaria/auth-conciliacion-bancaria.component';
import { CuentasConciliacionBancariaComponent } from './components/cuentas-conciliacion-bancaria/cuentas-conciliacion-bancaria.component';
import { TransaccionesConciliacionBancariaComponent } from './components/transacciones-conciliacion-bancaria/transacciones-conciliacion-bancaria.component';
import { OfertasPersonalizadasComponent } from './components/ofertas-personalizadas/ofertas-personalizadas.component';
import { OfertasComercialesComponent } from './components/ofertas-comerciales/ofertas-comerciales.component';
import { OfertasComercialesBancolombiaComponent } from './components/ofertas-comerciales-bancolombia/ofertas-comerciales-bancolombia.component';
import { OfertasComercialesBancolombia2Component } from './components/ofertas-comerciales-bancolombia2/ofertas-comerciales-bancolombia2.component';
import { TransaccionesConciliadasComponent } from './components/transacciones-conciliadas/transacciones-conciliadas.component';
import { RenovarSoat2Component } from './components/renovar-soat/renovar-soat2/renovar-soat2.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagonominaComponent } from './components/pagos/pagonomina/pagonomina.component';
import { Pagonomina2Component } from './components/pagos/pagonomina2/pagonomina2.component';
import { Pagonomina3Component } from './components/pagos/pagonomina3/pagonomina3.component';
import { PagonominaConsultarloteComponent } from './components/pagos/pagonomina-consultarlote/pagonomina-consultarlote.component';
import { PagonominaConsultabeneficiarioComponent } from './components/pagos/pagonomina-consultabeneficiario/pagonomina-consultabeneficiario.component';
import { PagonominaConsultadetalleComponent } from './components/pagos/pagonomina-consultadetalle/pagonomina-consultadetalle.component';
import { PagoproveedorComponent } from './components/pagos/pagoproveedor/pagoproveedor.component';
import { Pagoproveedor2Component } from './components/pagos/pagoproveedor2/pagoproveedor2.component';
import { Pagoproveedor3Component } from './components/pagos/pagoproveedor3/pagoproveedor3.component';
import { PagoproveedorConsultarloteComponent } from './components/pagos/pagoproveedor-consultarlote/pagoproveedor-consultarlote.component';
import { PagoproveedorConsultardetalleComponent } from './components/pagos/pagoproveedor-consultardetalle/pagoproveedor-consultardetalle.component';
import { PagoproveedorConsultarbeneficiarioComponent } from './components/pagos/pagoproveedor-consultarbeneficiario/pagoproveedor-consultarbeneficiario.component';
import { PagotercerosComponent } from './components/pagos/pagoterceros/pagoterceros.component';
import { Pagoterceros2Component } from './components/pagos/pagoterceros2/pagoterceros2.component';
import { Pagoterceros3Component } from './components/pagos/pagoterceros3/pagoterceros3.component';
import { PagotercerosConsultarloteComponent } from './components/pagos/pagoterceros-consultarlote/pagoterceros-consultarlote.component';
import { PagotercerosConsultardetalleComponent } from './components/pagos/pagoterceros-consultardetalle/pagoterceros-consultardetalle.component';
import { PagotercerosConsultarbeneficiarioComponent } from './components/pagos/pagoterceros-consultarbeneficiario/pagoterceros-consultarbeneficiario.component';
import { VinculacionDigitalComponent } from './components/vinculacion-digital/vinculacion-digital.component';
import { VinculacionDigital2Component } from './components/vinculacion-digital2/vinculacion-digital2.component';
import { VinculacionDigital3Component } from './components/vinculacion-digital3/vinculacion-digital3.component';
import { VinculacionDigital4Component } from './components/vinculacion-digital4/vinculacion-digital4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FamiliasComponent,
    FamiliaAgregacionComponent,
    CargaDocumentosPymeComponent,
    FamiliaAnaliticaComponent,
    EnvioDocumentosPymeComponent,
    DetalleExtractoComponent,
    RecomendacionComponent,
    CuentaAhorrosComponent,
    CuentaCorrienteComponent,
    TarjetaCreditoComponent,
    CuentaInversionComponent,
    ContactanosComponent,
    FamiliaEmbargosComponent,
    RequerimientosLegalesComponent,
    EmbargosDesembargosComponent,
    EmbargosDesembargos2Component,
    EmbargosDesembargos3Component,
    EmbargosDesembargos4Component,
    FamiliaSegurosComponent,
    SoatComponent,
    RenovarSoatComponent,
    AdquirirSoatComponent,
    EstudioPreliminarComponent,
    EstudioPreliminar2Component,
    EstudioPreliminarClienteComponent,
    EstudioPreliminarVehiculoComponent,
    EstudioPreliminarComercioComponent,
    EstudioPreliminarActividadComponent,
    EstudioFinalClienteComponent,
    EstudioFinalEconomicosComponent,
    EstudioFinalFinancierosComponent,
    EstudioManualSuplementariosComponent,
    EstudioManualCompaniaComponent,
    EstudioManualReferenciasComponent,
    ConciliacionBancariaComponent,
    AuthConciliacionBancariaComponent,
    CuentasConciliacionBancariaComponent,
    TransaccionesConciliacionBancariaComponent,
    OfertasPersonalizadasComponent,
    OfertasComercialesComponent,
    OfertasComercialesBancolombiaComponent,
    OfertasComercialesBancolombia2Component,
    TransaccionesConciliadasComponent,
    RenovarSoat2Component,
    PagosComponent,
    PagonominaComponent,
    Pagonomina2Component,
    Pagonomina3Component,
    PagonominaConsultarloteComponent,
    PagonominaConsultabeneficiarioComponent,
    PagonominaConsultadetalleComponent,
    PagoproveedorComponent,
    Pagoproveedor2Component,
    Pagoproveedor3Component,
    PagoproveedorConsultarloteComponent,
    PagoproveedorConsultardetalleComponent,
    PagoproveedorConsultarbeneficiarioComponent,
    PagotercerosComponent,
    Pagoterceros2Component,
    Pagoterceros3Component,
    PagotercerosConsultarloteComponent,
    PagotercerosConsultardetalleComponent,
    PagotercerosConsultarbeneficiarioComponent,
    VinculacionDigitalComponent,
    VinculacionDigital2Component,
    VinculacionDigital3Component,
    VinculacionDigital4Component,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    BootstrapModalModule,
    ChartsModule,
    FormsModule,
    AngularFileUploaderModule,
    FileUploadModule 

  ],
  providers: [
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
