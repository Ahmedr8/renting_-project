import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { VeichuleComponent } from './veichule/veichule.component';
import { RentingComponent } from './renting/renting.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'veichule', component: VeichuleComponent },
      { path: 'renting', component: RentingComponent },
      // Add other routes here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
