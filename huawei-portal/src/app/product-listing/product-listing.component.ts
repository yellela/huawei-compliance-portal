import { Component, OnInit , Input,ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UtilService } from '../services/util.service';
import { SortByPipe } from '../product-pipes/sort-by.pipe';
import { Product } from '../product';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  @Input('product') product: Product;

  products: Array<Product> = [];
  error: string = '';
  sortFields: Array<string> = [
    'ProductName',
    'info',
    'assetnumber',
    'type'
  ];
  
  @ViewChild('newProductForm') newProductForm: NgForm;

  productTypes: Array<string> = ['CCV', 'ODV', 'OCV'];


  constructor(
    private productService: ProductService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(
        data => this.products = data,
        error => this.error = error.statusText
      );

    this.productService.newProductSubject.subscribe(
      data => this.products = [data, ...this.products]
    );
  }

  addNewProduct(data) {
    this.productService.addProduct(data);
    this.newProductForm.reset();
  }

}
