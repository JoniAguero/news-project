import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'src/app/components/card-news/card.module';
import { CreatePostModule } from 'src/app/components/create-post/create-post.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CardPostsModule } from 'src/app/components/card-posts/card-posts.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        CardPostsModule,
        CreatePostModule,
        MaterialModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
