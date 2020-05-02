import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card.component";
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    entryComponents: []
})
export class CardModule { }
