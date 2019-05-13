import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ComplianceComponent } from './compliance/compliance.component'
import { ReportsComponent } from './reports/reports.component'
import { NewsComponent } from'./news/news.component'


const routes: Routes = [
  {
    path : 'moreInfo',
    component : InfoComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'Compliance-Portal',
    component: HomeComponent
  },
  {
    path : 'CompliancePlatform',
    component: ComplianceComponent
  },
  {
    path : 'products',
    component: ProductListingComponent
  },
  {
    path : 'Reports',
    component: ReportsComponent
  },
  {
    path : 'news',
    component: NewsComponent
  },
 { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
