import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdpreinitialiserPage } from './mdpreinitialiser.page';

const routes: Routes = [
  {
    path: '',
    component: MdpreinitialiserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdpreinitialiserPageRoutingModule {}
