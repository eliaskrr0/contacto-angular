import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ContactoService } from 'src/app/controlador/servicio/contacto.service';
import Swal from 'sweetalert2';
import { Contacto } from '../../contacto/contacto';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {
  contacto: Contacto = new Contacto();

  constructor(private servicio: ContactoService, private router: Router) { }

  guardar() {
     this.servicio.agregarContacto(this.contacto).subscribe(
      dato => {
        console.log(dato);        
        Swal.fire('¡Guardado!');
      }, error => {
        console.error('Se produjo el error: ', error);
        Swal.fire('¡Error, no se puede guardar!')
      }
    );
  }
}
