import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/core/models/post.model';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction('[Posts] Load Posts success', props<{posts: Post []}>());
export const loadPostsError = createAction('[Posts] Load Posts error', props<{payload: any}>());
