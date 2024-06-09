import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Necesario para el enrutamiento
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*Este es el modulo para hacer formularios reactivos*/
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormPComponent } from './form-p/form-p.component';
import { FormFComponent } from './form-f/form-f.component';
import { FormBComponent } from './form-b/form-b.component';
import { PagoComponent } from './pago/pago.component';
import { BoletoComponent } from './boleto/boleto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'form-p', component: FormPComponent },
  { path: 'form-f', component: FormFComponent },
  { path: 'form-b', component: FormBComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'boleto', component: BoletoComponent },
  {path: '', redirectTo: '/inicio',  pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormPComponent,
    FormFComponent,
    FormBComponent,
    PagoComponent,
    BoletoComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // Configura el enrutamiento con las rutas definidas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
