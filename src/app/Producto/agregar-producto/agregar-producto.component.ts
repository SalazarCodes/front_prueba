import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  modelProducto = new Producto();

  ngOnInit(): void {
  }

  guardarProducto(producto:Producto){
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se agregó con exito!");
      this.router.navigate(["listarProductos"]);
    })
  }

}
