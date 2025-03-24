import { Component, Inject, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { cargarUsuarios } from '../../store/actions';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-lista',
  imports: [ CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  private userService = inject(UsuarioService);

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  ngOnInit(): void {
    this.userService.GetData();

    this.userService.getData().subscribe(({users, loading, error}) => {
      console.log("USERSSSSSS", users)
      this.usuarios = users;
      this.loading  = loading;
      this.error    = error;
    })

  }





}
