import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesParentComponent } from './component/on-changes-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './component/do-check-parent/do-check-parent.component';

const routes: Routes = [
  {
    path : 'onchanges',
    component : OnChangesParentComponent
  },
  {
    path : 'docheck',
    component : DoCheckParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
