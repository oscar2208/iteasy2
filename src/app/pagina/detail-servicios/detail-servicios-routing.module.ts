import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailServiciosPage } from './detail-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: DetailServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailServiciosPageRoutingModule {}
