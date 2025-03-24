import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as usuariosActions from "../actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "../../services/usuario.service";

@Injectable()
export class UsuariosEfeccts {

  private actions$ = inject(Actions);
  private service = inject(UsuarioService);


  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      tap( data => console.log('effect tap ', data)),
      mergeMap(
        () => this.service.getUsers()
          .pipe(
            map(users => {
              console.log('USERSSS', users);
              return usuariosActions.cargarUsuariosSuccess({usuarios: users})}),
            catchError(error => {
              console.log("ERRORRRR", error);
              return of(usuariosActions.cargarUsuariosError({payload: error}))}),
        )
      )
    )
  );
}
