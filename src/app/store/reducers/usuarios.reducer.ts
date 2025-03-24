import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/index';
import { Usuario } from '../../models/usuario.model';

export interface UsersState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any,

};

const initialState: UsersState = {
  users : [],
  loaded: false,
  loading: false,
  error: null
};

export const reducerUsers = createReducer(initialState,

  on(cargarUsuarios,(state) => ({...state, loading: true})),

  on(cargarUsuariosSuccess, (state, {usuarios}) => ({
    ...state,
    users: [ ...usuarios],
    loaded: true,
    loading: false,
  })),

  on(cargarUsuariosError, (state, {payload}) => ({
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
