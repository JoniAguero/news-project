import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { CardModule } from 'src/app/components/card-news/card.module';
import { CardPostsModule } from 'src/app/components/card-posts/card-posts.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        CardPostsModule
    ],
    declarations: [
        PostsComponent
    ],
    exports: [
        PostsComponent
    ]
})
export class PostsModule { }
