import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { CardModule } from 'src/app/components/card-news/card.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule
    ],
    declarations: [
        NewsComponent
    ],
    exports: [
        NewsComponent
    ]
})
export class NewsModule { }
