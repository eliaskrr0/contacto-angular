import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from 'src/app/modelo/contacto/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  // URL principal del backend para conectarse
  private URL = "http://localhost:8080/contacto";

  constructor(private httpClient: HttpClient) { }

  agregarContacto(contacto: Contacto): Observable<Object> {
    return this.httpClient.post(`${this.URL}/agregar`, contacto);
  } 

  obtenerContacto(id: number): Observable<Contacto> {
    return this.httpClient.get<Contacto>(`${this.URL}/consultar/${id}`);
  }

  obtenerTodosContactos(): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(`${this.URL}/consultar`);
  }

  actualizarContacto(id: number, contacto: Contacto): Observable<Object> {
    return this.httpClient.put(`${this.URL}/actualizar/${id}`, contacto);
  }

  eliminarContacto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/contacto/${id}`);
  }

}
