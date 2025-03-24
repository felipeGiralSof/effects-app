import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as usuariosActions from "../actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "../../services/usuario.service";
import { UserActions } from "../actions/usuario.actions";

@Injectable()
export class UsuarioEfeccts {

  private actions$ = inject(Actions);
  private service = inject(UsuarioService);


  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(UserActions.loadUser),
      tap( data => console.log('effect tap ', data)),
      mergeMap(
        (props) => this.service.getUserById(props.id)
          .pipe(
            map(user => {
              console.log('USERRRRR', user);
              return UserActions.loadUserSuccess({usuario: user})}),
            catchError(error => {
              return of(UserActions.loadUserError({payload: error}))}),
        )
      )
    )
  );
}
