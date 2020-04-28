import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    entryComponents: []
})
export class LayoutModule { }
