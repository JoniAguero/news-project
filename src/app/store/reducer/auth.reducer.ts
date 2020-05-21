import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/auth.actions';

export interface State {
  auth: String;
}
 
export const initialState: State = {
  auth: 'unauthenticated'
};
 
const _authReducer = createReducer(initialState,
  on(actions.login, (state, { auth }) => ({...state, auth: auth})),
  on(actions.logout, (state, { auth }) => ({...state, auth: auth}))
);
 
export function authReducer(state, action) {
  return _authReducer(state, action);
}