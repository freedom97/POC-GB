import { RouterModule, Routes } from '@angular/router';
import { LineasNegocioComponent } from './components/lineas_de_negocio/lineas_de_negocio.component';

// import { AdquirirSoatComponent } from './components/adquirir-soat/adquirir-soat.component';

import { ProductosCaptacionComponent } from './components/productos-captacion/productos-captacion.component';
import { AuthConciliacionBancariaComponent } from './components/auth-conciliacion-bancaria/auth-conciliacion-bancaria.component';

import { CodigoQrManagement } from './components/codigoqr-productos/codigoqr-management/codigoqr-management.component';
import { ProductosFinanciacionComponent } from './components/productos-financiacion/productos-financiacion.component';
import { pruebaAPIQR } from './components/codigoqr-productos/codigoqr-management/pruebaAPI-QR/pruebaAPI-QR.component';
import { MediosPagosComponent } from './components/medios_de_pago/medios_de_pago.component';
import { ConciliacionPortada } from './components/productos-captacion/portada-conciliacion/portada-conciliacion.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { PortadaConsultaInfoDocumento } from './components/seguridad/portada-consulta-infodocumento/portada-consulta-infodocumento.component';
import { ConsultaInfoDocumento } from './components/seguridad/portada-consulta-infodocumento/consulta-info-documento/consulta-info-documento.component';
import { PortadaValidarPertenenciaCuentaComponent } from './components/productos-captacion/portada-validar-pertenencia-cuenta/portada-validar-pertenencia-cuenta.component';
import { ValidarPertenenciaCuentaComponent } from './components/productos-captacion/portada-validar-pertenencia-cuenta/validar-pertenencia-cuenta/validar-pertenencia-cuenta.component';
import { FilialesAliadosComponent } from './components/filiales-aliados/filiales-aliados.component';
import { GirosNacionalesPortada } from './components/filiales-aliados/giros-nacionales-portada/giros-nacionales-portada.component';
import { GirosNacionales } from './components/filiales-aliados/giros-nacionales-portada/giros-nacionales/giros-nacionales.component';
import { GirosNacionales2 } from './components/filiales-aliados/giros-nacionales-portada/giros-nacionales2/giros-nacionales2.component';
import { PortadaCreditoVehiculoComponent } from './components/productos-financiacion/credito-vehiculo/portada_credito_vehiculo/portada_credito_vehiculo.component';
import { CreditoVehiculoComponent } from './components/productos-financiacion/credito-vehiculo/credito-vehiculo.component';












const APP_ROUTES: Routes = [
    {path: 'lineas-negocio', component: LineasNegocioComponent},
    {path: 'productos-captacion', component: ProductosCaptacionComponent},
    {path: 'auth-conciliacion-bancaria', component: AuthConciliacionBancariaComponent},
    {path: 'codigoqr-management', component: CodigoQrManagement},
    {path: 'productos-financiacion', component: ProductosFinanciacionComponent},
    {path: 'pruebaAPI-qr', component: pruebaAPIQR},
    {path: 'medios-pago', component: MediosPagosComponent},
    {path: 'conciliacion-portada', component: ConciliacionPortada},
    {path: 'seguridad', component: SeguridadComponent},
    {path: 'consultar-infoDocumento-portada', component: PortadaConsultaInfoDocumento},
    {path: 'consultar-info-documento', component: ConsultaInfoDocumento},
    {path: 'validar-pertenencia-cuenta-portada', component: PortadaValidarPertenenciaCuentaComponent},
    {path: 'validar-pertenencia-cuenta', component: ValidarPertenenciaCuentaComponent},
    {path: 'filiales-aliados', component: FilialesAliadosComponent},
    {path: 'giros-nacionales-portada', component: GirosNacionalesPortada},
    {path: 'giros-nacionales', component: GirosNacionales},
    {path: 'giros-nacionales2', component: GirosNacionales2},
    {path: 'portada-credito-vehiculo', component:PortadaCreditoVehiculoComponent},
    {path: 'credito-vehiculo', component:CreditoVehiculoComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
