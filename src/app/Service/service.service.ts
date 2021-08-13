import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Models/Cliente';
import { Producto } from '../Models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  urlGetCliente = 'http://localhost:8080/cliente/listaClientes';
  urlGetProducto = 'http://localhost:8080/producto/listaProductos';
  urlPostCliente = 'http://localhost:8080/cliente/nuevo';
  urlPostProducto = 'http://localhost:8080/producto/nuevo';
  urlGetClienteId = 'http://localhost:8080/cliente/detalleCliente';
  urlUpdateCliente = 'http://localhost:8080/cliente/updateCliente';
  urlDeleteCliente = 'http://localhost:8080/cliente/borrarCliente';
  urlDeleteProducto = 'http://localhost:8080/producto/borrarProducto';

  getClientes(){
    return this.http.get<Cliente[]>(this.urlGetCliente);
  }

  getProductos(){
    return this.http.get<Producto[]>(this.urlGetProducto);
  }

  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.urlPostCliente, cliente);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.urlPostProducto, producto);
  }

  getClienteId(id:number){
    return this.http.get<Cliente>(this.urlGetClienteId+"/"+id);
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.urlUpdateCliente+"/"+cliente.id, cliente);
  }

  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.urlDeleteCliente+"/"+cliente.id);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Cliente>(this.urlDeleteProducto+"/"+producto.id);
  }
}
