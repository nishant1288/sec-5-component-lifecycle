import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesParentComponent } from './component/on-changes-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './component/do-check-parent/do-check-parent.component';
import { AfterContentInitParentComponent } from './component/after-content-init-parent/after-content-init-parent.component';
import { OnDestroyParentComponent } from './component/on-destroy-parent/on-destroy-parent.component';

const routes: Routes = [
  {
    path : 'onchanges',
    component : OnChangesParentComponent
  },
  {
    path : 'docheck',
    component : DoCheckParentComponent
  },
  {
    path : 'aftercontentinit',
    component : AfterContentInitParentComponent
  },
  {
    path: 'ondestroy',
    component : OnDestroyParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
