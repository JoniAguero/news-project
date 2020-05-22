import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  auth: reducers.AuthState,
  posts: reducers.PostsState
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: reducers.authReducer,
  posts: reducers.postsReducer
}