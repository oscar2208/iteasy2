import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteServiciosPageRoutingModule } from './delete-servicios-routing.module';

import { DeleteServiciosPage } from './delete-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteServiciosPageRoutingModule
  ],
  declarations: [DeleteServiciosPage]
})
export class DeleteServiciosPageModule {}
