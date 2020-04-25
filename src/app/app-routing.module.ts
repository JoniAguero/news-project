import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule),
  },
  { 
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'external-api',
    loadChildren: () => import('./pages/external-api/external-api.module').then(m => m.ExternalModuleApiModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'news', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
