import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddServiciosPage } from './add-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: AddServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddServiciosPageRoutingModule {}
