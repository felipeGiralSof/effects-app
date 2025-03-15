import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Respuesta, User } from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';
  private http = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<User[]>{
    return this.http.get<Respuesta>(`${this.url}/users?page=2`)
      .pipe(
        map((resp) => resp.data),
      );
  }
}
