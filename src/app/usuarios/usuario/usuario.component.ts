import { Component, inject, Input, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { UserActions } from '../../store/actions/usuario.actions';
import { Response } from '../../interface/usuario.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuario',
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  private router = inject(ActivatedRoute);
  private store = inject(Store<AppState>);

  usuario!: Usuario;

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({user}) => {
     console.log("USERUSER", user);
     this.usuario = user;
    })

    this.router.params.subscribe(({id}) => {
      if(id){
        this.store.dispatch(UserActions.loadUser({id}));
      }
    });
  }
}
