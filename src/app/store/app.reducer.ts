import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducers'
import { UsuariosEfeccts } from "./effects/usuarios.effects";
import { UsuarioEfeccts } from "./effects/usuario.effects";


export interface AppState {
  usuarios  : reducers.UsersState;
  usuario   : reducers.UserState;

}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios : reducers.reducerUsers,
  usuario  : reducers.reducerUser
}

export const appEfects = [
  UsuariosEfeccts,
  UsuarioEfeccts
]
