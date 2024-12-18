import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesParentComponent } from './component/on-changes-parent/on-changes-parent.component';
import { OnChangesChildComponent } from './component/on-changes-child/on-changes-child.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DoCheckParentComponent } from './component/do-check-parent/do-check-parent.component';
import { DoCheckChildComponent } from './component/do-check-child/do-check-child.component';
import { AfterContentInitParentComponent } from './component/after-content-init-parent/after-content-init-parent.component';
import { AfterContentInitChildComponent } from './component/after-content-init-child/after-content-init-child.component';
import { OnDestroyParentComponent } from './component/on-destroy-parent/on-destroy-parent.component';
import { OnDestroyChildComponent } from './component/on-destroy-child/on-destroy-child.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesParentComponent,
    OnChangesChildComponent,
    NavbarComponent,
    DoCheckParentComponent,
    DoCheckChildComponent,
    AfterContentInitParentComponent,
    AfterContentInitChildComponent,
    OnDestroyParentComponent,
    OnDestroyChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
