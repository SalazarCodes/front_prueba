import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  modelCliente = new Cliente();
  cliente: Cliente = new Cliente();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.modificarCliente();
  }

  modificarCliente(){
    let id = JSON.parse(localStorage.getItem("id")!);
    this.service.getClienteId(id)
    .subscribe(data=>{
      this.cliente = data;
    });
  }

}
