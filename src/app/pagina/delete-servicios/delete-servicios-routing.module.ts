import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteServiciosPage } from './delete-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteServiciosPageRoutingModule {}
