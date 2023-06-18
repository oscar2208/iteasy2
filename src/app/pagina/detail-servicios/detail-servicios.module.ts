import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailServiciosPageRoutingModule } from './detail-servicios-routing.module';

import { DetailServiciosPage } from './detail-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailServiciosPageRoutingModule
  ],
  declarations: [DetailServiciosPage]
})
export class DetailServiciosPageModule {}
