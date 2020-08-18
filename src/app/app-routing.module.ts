import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'

import { NewComponent } from './new/new.component';
import { UsedComponent } from './used/used.component';
import { DealsComponent } from './deals/deals.component';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
  { path: 'New', component: NewComponent },
  { path: 'Used', component: UsedComponent },
  { path: 'Deals', component: DealsComponent },
  { path: 'How-To', component: HowToComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
