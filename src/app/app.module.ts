import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { EliminarComponent } from './Cliente/eliminar/eliminar.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { EliminarProductoComponent } from './Producto/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './Producto/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    EliminarProductoComponent,
    EditarProductoComponent,
    AgregarProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
