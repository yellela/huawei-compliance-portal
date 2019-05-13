import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-prodcut-listing-form.component.html',
  styleUrls: ['./add-product-listing-form.component.css']
})
export class AddProductListingFormComponent implements OnInit {

  @ViewChild('newProductForm') newProductForm: NgForm;
  productTypes: Array<string> = ['Mobile', 'Tablets', 'DeskTop/Laptop'];

  constructor(
    private productService: ProductService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  addNewProduct(data) {
    this.productService.addProduct(data);
    this.newProductForm.reset();
  }

}
