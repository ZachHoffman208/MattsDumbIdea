import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { NewComponent } from './new/new.component';
import { UsedComponent } from './used/used.component';
import { DealsComponent } from './deals/deals.component';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';



const routes: Routes = [
  {path: 'new', component: NewComponent},
  {path: 'used', component: UsedComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'how-to', component: HowToComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UsedComponent,
    DealsComponent,
    HowToComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
