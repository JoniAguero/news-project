import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'src/app/components/card-news/card.module';
import { CreatePostModule } from 'src/app/components/create-post/create-post.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        CreatePostModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
