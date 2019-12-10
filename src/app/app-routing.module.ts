import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos la pagina
import{ContactoComponent} from'./pages/contacto/contacto.component';
import{ServiciosComponent} from './pages/servicios/servicios.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
