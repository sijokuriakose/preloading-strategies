import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { NetworkAwarePreloadingStrategyService } from './core/services/network-aware-preloading-strategy.service';
import { PreloadStrategyService } from './core/services/preload-strategy.service';

const routes: Routes = [
  {
    path: 'module-1',
    loadChildren: () => import('./module-1/module-1.module').then(m => m.Module1Module),
    data: {
      preload: true,
      loadAfterSeconds: 5,
    }
  },
  {
    path: 'module-2',
    loadChildren: () => import('./module-2/module-2.module').then(m => m.Module2Module)
  },
  {
    path: 'module-3',
    loadChildren: () => import('./module-3/module-3.module').then(m => m.Module3Module)
  },
  {
    path: 'module-4',
    loadChildren: () => import('./module-4/module-4.module').then(m => m.Module4Module),
    data: { preload: false }
  },
  {
    path: 'module-5',
    loadChildren: () => import('./module-5/module-5.module').then(m => m.Module5Module)
  },
  {
    path: 'module-6',
    loadChildren: () => import('./module-6/module-6.module').then(m => m.Module6Module)
  },
  {
    path: 'module-7',
    loadChildren: () => import('./module-7/module-7.module').then(m => m.Module7Module)
  },
  {
    path: 'module-8',
    loadChildren: () => import('./module-8/module-8.module').then(m => m.Module8Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy:
    // PreloadStrategyService
    // PreloadAllModules,
    // NoPreloading
    QuicklinkStrategy,
    // NetworkAwarePreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
