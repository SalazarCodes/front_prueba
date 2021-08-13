import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { EliminarComponent } from './Cliente/eliminar/eliminar.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AgregarProductoComponent } from './Producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './Producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './Producto/eliminar-producto/eliminar-producto.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';


const routes: Routes = [
  {path : 'listarCliente', component : ListarComponent},
  {path : 'agregarCliente', component : AgregarComponent},
  {path : 'editarCliente', component : EditarComponent},
  {path : 'eliminarCliente', component : EliminarComponent},
  {path : 'listarProductos', component : ListarProductoComponent},
  {path : 'agregarProducto', component : AgregarProductoComponent},
  {path : 'editarProducto', component : EditarProductoComponent},
  {path : 'eliminarProducto', component : EliminarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
