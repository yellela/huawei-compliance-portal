import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  public newProductSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllProducts() {
    return this.http.get('data/product.json').map(res => res.json());
  }

  addProduct(data) {
    data.image = 'huawei-produt';
    this.newProductSubject.next(data);
  }

}
