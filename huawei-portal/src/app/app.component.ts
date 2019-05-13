
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from './services/product.service';
import { UtilService } from './services/util.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('newProductForm') newProductForm: NgForm;
  propertyTypes: Array<string> = ['Mobile', 'Tablet', 'DeskTop/Laptop'];

  constructor(
    private productService: ProductService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) {
    this.productService.addProduct(data);
    this.newProductForm.reset();
  }

}
