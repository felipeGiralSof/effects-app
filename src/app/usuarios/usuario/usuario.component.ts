import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  standalone: true,
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() usuario!: Usuario;

}
