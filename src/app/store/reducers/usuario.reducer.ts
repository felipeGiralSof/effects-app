import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/index';
import { UserActions } from '../actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

export const userFeatureKey = 'user';

export interface UserState {
    id      : string | null,
    user    : Usuario | null,
    loaded  : boolean,
    loading : boolean,
    error   : any,

};

export const initialState: UserState = {
  id      : null,
  user    : null,
  loaded  : false,
  loading : false,
  error   : null
};

export const reducerUser = createReducer(initialState,

  on(UserActions.loadUser,(state, {id}) => ({
    ...state,
    loading: true,
    id: id,
  })),

  on(UserActions.loadUserSuccess, (state, {usuario}) => ({
    ...state,
    user: { ...usuario},
    loaded: true,
    loading: false,
  })),

  on(UserActions.loadUserError, (state, {payload}) => ({
    ...state,
    loaded: true,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    }
  }))

);
