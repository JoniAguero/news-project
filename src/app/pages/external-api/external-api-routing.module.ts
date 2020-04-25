import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ExternalApiComponent } from './external-api.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/core/interceptors/http-interceptor.service';

const routes: Routes = [
  { path: '',
    component: ExternalApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }]
})
export class ExternalApiRoutingModule { }
