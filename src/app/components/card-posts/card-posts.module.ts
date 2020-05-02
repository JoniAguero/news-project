import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostsComponent } from "./card-posts.component";
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        CardPostsComponent
    ],
    exports: [
        CardPostsComponent
    ],
    entryComponents: []
})
export class CardPostsModule { }
