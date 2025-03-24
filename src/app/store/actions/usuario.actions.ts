import { createActionGroup, props } from "@ngrx/store";
import { Usuario } from "../../models/usuario.model";


export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': props<{id: string}>(),
    'Load User Success': props<{usuario: Usuario}>(),
    'Load User Error': props<{payload: any}>(),
  }
})
