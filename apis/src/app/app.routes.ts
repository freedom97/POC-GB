import { RouterModule, Routes } from '@angular/router';
import { FamiliasComponent } from './components/familias/familias.component';
import { FamiliaAgregacionComponent } from './components/familia-agregacion/familia-agregacion.component';
import { CargaDocumentosPymeComponent } from './components/carga-documentos-pyme/carga-documentos-pyme.component';
import { EnvioDocumentosPymeComponent } from './components/envio-documentos-pyme/envio-documentos-pyme.component';
import { DetalleExtractoComponent } from './components/detalle-extracto/detalle-extracto.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { CuentaAhorrosComponent } from './components/cuenta-ahorros/cuenta-ahorros.component';
import { CuentaCorrienteComponent } from './components/cuenta-corriente/cuenta-corriente.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { CuentaInversionComponent } from './components/cuenta-inversion/cuenta-inversion.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { SoatComponent } from './components/soat/soat.component';
import { RenovarSoatComponent } from './components/renovar-soat/renovar-soat.component';
import { RenovarSoat2Component } from './components/renovar-soat/renovar-soat2/renovar-soat2.component';
// import { AdquirirSoatComponent } from './components/adquirir-soat/adquirir-soat.component';
import { EstudioPreliminarComponent } from './components/creditos-depositos/credito-vehiculo/estudio-preliminar/estudio-preliminar.component';
import { EstudioPreliminar2Component } from './components/creditos-depositos/credito-vehiculo/estudio-preliminar/estudio-preliminar2/estudio-preliminar2.component';
import { EstudioPreliminarClienteComponent } from './components/creditos-depositos/credito-vehiculo/estudio-preliminar/estudio-preliminar-cliente/estudio-preliminar-cliente.component';
import { EstudioPreliminarVehiculoComponent } from './components/creditos-depositos/credito-vehiculo/estudio-preliminar/estudio-preliminar-vehiculo/estudio-preliminar-vehiculo.component';
import { EstudioPreliminarComercioComponent } from './components/creditos-depositos/credito-vehiculo/estudio-preliminar/estudio-preliminar-comercio/estudio-preliminar-comercio.component';
import { EstudioPreliminarActividadComponent } from './components/creditos-depositos/credito-vehiculo/estudio-preliminar/estudio-preliminar-actividad/estudio-preliminar-actividad.component';
import { EstudioFinalClienteComponent } from './components/creditos-depositos/credito-vehiculo/estudio-final/estudio-final-cliente/estudio-final-cliente.component';
import { EstudioFinalEconomicosComponent } from './components/creditos-depositos/credito-vehiculo/estudio-final/estudio-final-economicos/estudio-final-economicos.component';
import { EstudioFinalFinancierosComponent } from './components/creditos-depositos/credito-vehiculo/estudio-final/estudio-final-financieros/estudio-final-financieros.component';
import { EstudioManualSuplementariosComponent } from './components/creditos-depositos/credito-vehiculo/estudio-manual/estudio-manual-suplementarios/estudio-manual-suplementarios.component';
import { EstudioManualCompaniaComponent } from './components/creditos-depositos/credito-vehiculo/estudio-manual/estudio-manual-compania/estudio-manual-compania.component';
import { EstudioManualReferenciasComponent } from './components/creditos-depositos/credito-vehiculo/estudio-manual/estudio-manual-referencias/estudio-manual-referencias.component';
import { ConciliacionBancariaComponent } from './components/conciliacion-bancaria/conciliacion-bancaria.component';
import { AuthConciliacionBancariaComponent } from './components/auth-conciliacion-bancaria/auth-conciliacion-bancaria.component';
import { CuentasConciliacionBancariaComponent } from './components/cuentas-conciliacion-bancaria/cuentas-conciliacion-bancaria.component';
import { TransaccionesConciliacionBancariaComponent } from './components/transacciones-conciliacion-bancaria/transacciones-conciliacion-bancaria.component';
import { OfertasComercialesComponent } from './components/ofertas-comerciales/ofertas-comerciales.component';
import { OfertasComercialesBancolombiaComponent } from './components/ofertas-comerciales-bancolombia/ofertas-comerciales-bancolombia.component';
import { OfertasComercialesBancolombia2Component } from './components/ofertas-comerciales-bancolombia2/ofertas-comerciales-bancolombia2.component';
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
import { CodigoQrManagement } from './components/codigoqr-productos/codigoqr-management/codigoqr-management.component';
import { CreditosDepositos } from './components/creditos-depositos/creditos-depositos.component';
import { pruebaAPIQR } from './components/codigoqr-productos/codigoqr-management/pruebaAPI-QR/pruebaAPI-QR.component';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { ConciliacionPortada } from './components/conciliacion-bancaria/portada-conciliacion/portada-conciliacion.component';
import { VerificarDocIdentidad } from './components/verificacion-documento-identidad/verificacion-documento-identidad.component';
import { PortadaConsultaInfoDocumento } from './components/verificacion-documento-identidad/portada-consulta-infodocumento/portada-consulta-infodocumento.component';
import { ConsultaInfoDocumento } from './components/verificacion-documento-identidad/portada-consulta-infodocumento/consulta-info-documento/consulta-info-documento.component';
import { PortadaValidarPertenenciaCuentaComponent } from './components/conciliacion-bancaria/portada-validar-pertenencia-cuenta/portada-validar-pertenencia-cuenta.component';
import { ValidarPertenenciaCuentaComponent } from './components/conciliacion-bancaria/portada-validar-pertenencia-cuenta/validar-pertenencia-cuenta/validar-pertenencia-cuenta.component';











const APP_ROUTES: Routes = [
    {path: 'familias', component: FamiliasComponent},
    {path: 'familia-agregacion', component: FamiliaAgregacionComponent},
    {path: 'carga-documentos-pyme', component: CargaDocumentosPymeComponent},
    {path: 'envio-documentos-pyme', component: EnvioDocumentosPymeComponent},
    {path: 'detalle-extracto', component: DetalleExtractoComponent},
    {path: 'recomendacion', component: RecomendacionComponent},
    {path: 'cuenta-ahorros', component: CuentaAhorrosComponent},
    {path: 'cuenta-corriente', component: CuentaCorrienteComponent},
    {path: 'tarjeta-credito', component: TarjetaCreditoComponent},
    {path: 'cuenta-inversion', component: CuentaInversionComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: 'ver-soat', component: SoatComponent},
    {path: 'renovar-soat', component: RenovarSoatComponent},
    {path: 'renovar-soat2', component: RenovarSoat2Component},
    // {path: 'adquirir-soat', component: AdquirirSoatComponent},
    {path: 'estudio-preliminar', component: EstudioPreliminarComponent},
    {path: 'estudio-preliminar2', component: EstudioPreliminar2Component},
    {path: 'estudio-preliminar-cliente', component: EstudioPreliminarClienteComponent},
    {path: 'estudio-preliminar-vehiculo', component: EstudioPreliminarVehiculoComponent},
    {path: 'estudio-preliminar-comercio', component: EstudioPreliminarComercioComponent},
    {path: 'estudio-preliminar-actividad', component: EstudioPreliminarActividadComponent},
    {path: 'estudio-final-cliente', component: EstudioFinalClienteComponent},
    {path: 'estudio-final-economicos', component: EstudioFinalEconomicosComponent},
    {path: 'estudio-final-financieros', component: EstudioFinalFinancierosComponent},
    {path: 'estudio-manual-suplementarios', component: EstudioManualSuplementariosComponent},
    {path: 'estudio-manual-compania', component: EstudioManualCompaniaComponent},
    {path: 'estudio-manual-referencias', component: EstudioManualReferenciasComponent},
    {path: 'conciliacion-bancaria', component: ConciliacionBancariaComponent},
    {path: 'auth-conciliacion-bancaria', component: AuthConciliacionBancariaComponent},
    {path: 'cuentas-conciliacion-bancaria', component: CuentasConciliacionBancariaComponent},
    {path: 'transacciones-conciliacion-bancaria', component: TransaccionesConciliacionBancariaComponent},
    {path: 'ofertas-comerciales', component: OfertasComercialesComponent},
    {path: 'ofertas-comerciales-bancolombia', component: OfertasComercialesBancolombiaComponent},
    {path: 'ofertas-comerciales-bancolombia2', component: OfertasComercialesBancolombia2Component},
    {path: 'pagos', component: PagosComponent},
    {path: 'pagonomina', component: PagonominaComponent},
    {path: 'pagonomina2', component: Pagonomina2Component},
    {path: 'pagonomina3', component: Pagonomina3Component},
    {path: 'pagonomina-consultarlote',  component: PagonominaConsultarloteComponent},
    {path: 'pagonomina-consultabeneficiario',  component: PagonominaConsultabeneficiarioComponent},
    {path: 'pagonomina-consultadetalle',  component: PagonominaConsultadetalleComponent},
    {path: 'pagoproveedor', component: PagoproveedorComponent},
    {path: 'pagoproveedor2', component: Pagoproveedor2Component},
    {path: 'pagoproveedor3', component: Pagoproveedor3Component},
    {path: 'pagoproveedor-consultarlote',  component: PagoproveedorConsultarloteComponent},
    {path: 'pagoproveedor-consultardetalle',  component: PagoproveedorConsultardetalleComponent},
    {path: 'pagoproveedor-consultarbeneficiario',  component: PagoproveedorConsultarbeneficiarioComponent},
    {path: 'pagoterceros', component: PagotercerosComponent},
    {path: 'pagoterceros2', component: Pagoterceros2Component},
    {path: 'pagoterceros3', component: Pagoterceros3Component},
    {path: 'pagoterceros-consultarlote',  component: PagotercerosConsultarloteComponent},
    {path: 'pagoterceros-consultardetalle',  component: PagotercerosConsultardetalleComponent},
    {path: 'pagoterceros-consultarbeneficiario',  component: PagotercerosConsultarbeneficiarioComponent},
    {path: 'codigoqr-management', component: CodigoQrManagement},
    {path: 'creditos-depositos', component: CreditosDepositos},
    {path: 'pruebaAPI-qr', component: pruebaAPIQR},
    {path: 'transferencias', component: TransferenciasComponent},
    {path: 'conciliacion-portada', component: ConciliacionPortada},
    {path: 'verificar-doc-identidad', component: VerificarDocIdentidad},
    {path: 'consultar-infoDocumento-portada', component: PortadaConsultaInfoDocumento},
    {path: 'consultar-info-documento', component: ConsultaInfoDocumento},
    {path: 'validar-pertenencia-cuenta-portada', component: PortadaValidarPertenenciaCuentaComponent},
    {path: 'validar-pertenencia-cuenta', component: ValidarPertenenciaCuentaComponent},





    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
