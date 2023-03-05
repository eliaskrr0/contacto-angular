import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './modelo/secundario/actualizar/actualizar.component';
import { BorrarComponent } from './modelo/secundario/borrar/borrar.component';
import { ConsultarComponent } from './modelo/secundario/consultar/consultar.component';
import { InsertarComponent } from './modelo/secundario/insertar/insertar.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacto/consultar', pathMatch: 'full' },
  { path: 'contacto/consultar', component: ConsultarComponent},
  { path: 'contacto/agregar', component: InsertarComponent},
  { path: 'contacto/actualizar', component: ActualizarComponent},
  { path: 'contacto/borrar', component: BorrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
