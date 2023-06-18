import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-servicios',
    pathMatch: 'full'
  },
  {
    path: 'add-servicios',
    loadChildren: () => import('./pagina/add-servicios/add-servicios.module').then( m => m.AddServiciosPageModule)
  },
  {
    path: 'list-servicios',
    loadChildren: () => import('./pagina/list-servicios/list-servicios.module').then( m => m.ListServiciosPageModule)
  },
  {
    path: 'update-servicios',
    loadChildren: () => import('./pagina/update-servicios/update-servicios.module').then( m => m.UpdateServiciosPageModule)
  },
  {
    path: 'detail-servicios',
    loadChildren: () => import('./pagina/detail-servicios/detail-servicios.module').then( m => m.DetailServiciosPageModule)
  },
  {
    path: 'delete-servicios',
    loadChildren: () => import('./pagina/delete-servicios/delete-servicios.module').then( m => m.DeleteServiciosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
