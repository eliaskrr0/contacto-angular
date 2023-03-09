import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modelo/primario/nav/nav.component';
import { HeaderComponent } from './modelo/primario/header/header.component';
import { FooComponent } from './modelo/primario/foo/foo.component';
import { ConsultarComponent } from './modelo/secundario/consultar/consultar.component';
import { InsertarComponent } from './modelo/secundario/insertar/insertar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooComponent,
    ConsultarComponent,
    InsertarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
