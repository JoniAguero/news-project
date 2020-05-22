import { Injectable } from '@angular/core';
import * as actions from "../actions";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { PostService } from 'src/app/core/services/posts.service';

@Injectable()
export class PostsEffects {

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) { }

  loadPosts$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.loadPosts),
      mergeMap(
        () => this.postService.getPosts()
        .pipe(
          map(posts => actions.loadPostsSuccess({ posts }))
        )
      )
    )
  );

}
