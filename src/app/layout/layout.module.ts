import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader { return new TranslateHttpLoader(http, './assets/locale/', '.json'); } 


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
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
