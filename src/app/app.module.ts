import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthGuard} from "./guards/auth.guard";
import { UsersComponent } from './components/users/users.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DialogModule} from "primeng/primeng";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/primeng';
import {ContextMenuModule} from "primeng/primeng";
import { UnidadesComponent } from './components/unidades/unidades.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EstadosComponent } from './components/estados/estados.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';

const  appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'unidades', component: UnidadesComponent, canActivate:[AuthGuard]},
  {path: 'clientes', component: ClientesComponent, canActivate:[AuthGuard]},
  {path: 'estados', component: EstadosComponent, canActivate:[AuthGuard]},
  {path: 'consultas', component: ConsultasComponent, canActivate:[AuthGuard]},
  {path: 'nuevo', component: NuevoComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    UsersComponent,
    UnidadesComponent,
    ClientesComponent,
    EstadosComponent,
    ConsultasComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ContextMenuModule

  ],
  providers: [ValidateService,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
