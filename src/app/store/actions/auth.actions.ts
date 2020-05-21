import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Anauthenticated', props<{auth}>());
export const logout = createAction('[Auth] Unauthenticated', props<{auth}>());
