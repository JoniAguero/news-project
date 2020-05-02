import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NewsModule } from '../pages/news/news.module';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { PostsModule } from '../pages/posts/posts.module';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader { return new TranslateHttpLoader(http, './assets/locale/', '.json'); } 


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        NewsModule,
        DashboardModule,
        PostsModule,
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
