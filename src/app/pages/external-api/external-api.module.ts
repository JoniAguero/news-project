import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalApiRoutingModule } from './external-api-routing.module';
import { ExternalApiComponent } from './external-api.component';

@NgModule({
    imports: [
        CommonModule,
        ExternalApiRoutingModule
    ],
    declarations: [
        ExternalApiComponent
    ],
    exports: [
        ExternalApiComponent
    ]
})
export class ExternalModuleApiModule { }
