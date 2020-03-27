import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'landing', component: LandingComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
