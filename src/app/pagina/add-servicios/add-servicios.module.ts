import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServiciosPageRoutingModule } from './add-servicios-routing.module';

import { AddServiciosPage } from './add-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServiciosPageRoutingModule
  ],
  declarations: [AddServiciosPage]
})
export class AddServiciosPageModule {}
