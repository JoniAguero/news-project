import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Post } from 'src/app/core/models/post.model';

export interface PostsState {
  posts: any,
  loaded: boolean,
  loading: boolean,
  error: any
}
 
const initialState: PostsState = {
  posts: [],
  loaded: false,
  loading: false,
  error: null
};
 
const _postsReducer = createReducer(initialState,
  on(actions.loadPosts, (state) => ({
    ...state,
    loading: true
  })),
  on(actions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    loading: false,
    loaded: true,
    posts: [...posts]
  })),
  on(actions.loadPostsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
);
 
export function postsReducer(state, action) {
  return _postsReducer(state, action);
}