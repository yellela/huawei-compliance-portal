import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product/product.component';
import { AddProductListingFormComponent } from './add-product-listing-form/add-product-listing-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';
import { UtilService } from './services/util.service';
import { SortByPipe } from './product-pipes/sort-by.pipe';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { ReportsComponent } from './reports/reports.component';
import { NewsComponent } from './news/news.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ProductComponent,
    AddProductListingFormComponent,
    SortByPipe,
    InfoComponent,
    LoginComponent,
    HomeComponent,
    ComplianceComponent,
    ReportsComponent,
    NewsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTablesModule
    
  ],
  providers: [
    ProductService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
