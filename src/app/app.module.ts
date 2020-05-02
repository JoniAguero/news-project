import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';

import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader { return new TranslateHttpLoader(http, './assets/locale/', '.json'); } 
export class MissingTranslationService implements MissingTranslationHandler { 
  handle(params: MissingTranslationHandlerParams) { 
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`; 
  } 
} 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader, 
        useFactory: HttpLoaderFactory, 
        deps: [HttpClient], 
      }, 
        missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService }, 
        useDefaultLang: false, 
      }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
