import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesParentComponent } from './component/on-changes-parent/on-changes-parent.component';

const routes: Routes = [
  {
    path : 'onchanges',
    component : OnChangesParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
