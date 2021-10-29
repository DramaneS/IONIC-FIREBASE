import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdpoublierPage } from './mdpoublier.page';

const routes: Routes = [
  {
    path: '',
    component: MdpoublierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdpoublierPageRoutingModule {}
