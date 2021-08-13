import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos:Producto[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{this.productos=data;
    });
  }

  eliminarProducto(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      alert("Se eliminó al producto...");
      this.productos = this.productos.filter(p => p!==producto);
    })
  }

}
