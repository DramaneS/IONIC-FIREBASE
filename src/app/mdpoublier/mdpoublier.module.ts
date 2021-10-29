import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdpoublierPageRoutingModule } from './mdpoublier-routing.module';

import { MdpoublierPage } from './mdpoublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdpoublierPageRoutingModule
  ],
  declarations: [MdpoublierPage]
})
export class MdpoublierPageModule {}
