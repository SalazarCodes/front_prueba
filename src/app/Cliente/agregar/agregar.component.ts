import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  modelCliente = new Cliente();

  ngOnInit(): void {   
  }

  guardarCliente(cliente:Cliente){
    this.service.createCliente(cliente)
    .subscribe(data=>{
      alert("Se agregó con exito!");
      this.router.navigate(["listarCliente"]);
    })
  }

}
