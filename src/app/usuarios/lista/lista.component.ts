import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  standalone: true,
  selector: 'app-lista',
  imports: [UsuarioComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  private userService = inject(UsuarioService);
  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(e => {
      this.usuarios = e;
      console.log("USUARIO", e);
    });
  }





}
