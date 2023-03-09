import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './modelo/secundario/consultar/consultar.component';
import { InsertarComponent } from './modelo/secundario/insertar/insertar.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacto/consultar', pathMatch: 'full' },
  { path: 'contacto/consultar', component: ConsultarComponent},
  { path: 'contacto/agregar', component: InsertarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
