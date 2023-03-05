import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/controlador/servicio/contacto.service';
import { Contacto } from '../../contacto/contacto';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  contacto: Contacto = new Contacto();
  contactos: Contacto[] = [];
  isResultadoCargado = false;

  id: number = 0;
  nombre: String = "";
  apellidos: String = "";
  movil: number = 0;

  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTodosContactos();
  }

  private obtenerTodosContactos() {
    this.contactoService.obtenerTodosContactos()
      .subscribe(
        dato => {
          this.contactos = dato;
        },
        error => console.error("Error: ", error)
      );
  }
}
