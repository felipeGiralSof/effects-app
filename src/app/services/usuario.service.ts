import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User, ResponseUsers, ResponseUser } from '../interface/usuario.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Usuario } from '../models/usuario.model';
import { cargarUsuarios } from '../store/actions';

@Injectable({

  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';
  private http = inject(HttpClient);
  private store = inject(Store<AppState>);

  constructor() { }

  getUsers(): Observable<User[]>{
    return this.http.get<ResponseUsers>(`${this.url}/users?page=2&delay=3`)
      .pipe(
        map((resp) => resp.data),
      );
  }

  getUserById(id: string){
    return this.http.get<ResponseUser>(`${this.url}/users/${id}`)
      .pipe(
        map( resp => resp.data)
      );
  }

  GetData(){
    this.store.dispatch(cargarUsuarios());
  }

  getData(): Observable<any>{
    return this.store.select('usuarios');
  }

}
