import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-rounting.module';
import { NewsComponent } from './news.component';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
    imports: [
        CommonModule,
        NewsRoutingModule,
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
