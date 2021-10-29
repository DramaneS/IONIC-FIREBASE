import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdpreinitialiserPageRoutingModule } from './mdpreinitialiser-routing.module';

import { MdpreinitialiserPage } from './mdpreinitialiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdpreinitialiserPageRoutingModule
  ],
  declarations: [MdpreinitialiserPage]
})
export class MdpreinitialiserPageModule {}
