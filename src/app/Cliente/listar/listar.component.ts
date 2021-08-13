import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ServiceService } from '../../Service/service.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Cliente[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data=>{this.clientes=data;
    });
  }

  editarCliente(cliente:Cliente):void{
    localStorage.setItem("id", cliente.id.toString())
    this.router.navigate(["editarCliente"]);
  }

  eliminarCliente(cliente:Cliente){
    this.service.deleteCliente(cliente)
    .subscribe(data=>{
      alert("Se eliminó al cliente...");
      this.clientes = this.clientes.filter(c => c!==cliente);
    })
  }
}
