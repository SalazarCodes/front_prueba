import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba tecnica Canvia';

  constructor(private router:Router){}

  listarClientes(){
    this.router.navigate(["listarCliente"]);
  }

  listarProductos(){
    this.router.navigate(["listarProductos"]);
  }

  agregarCliente(){
    this.router.navigate(["agregarCliente"]);
  }

  agregarProductos(){
    this.router.navigate(["agregarProducto"]);
  }
  
}
