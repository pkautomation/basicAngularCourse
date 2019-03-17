import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle = 'Product List!';
  products: IProduct[];
  showImage = false;
  listFilter = 'cart';

  constructor() {
    this.products = [
      {id: 1, name: 'first product', code: 'abc-abc',
        imageUrl: 'https://openclipart.org/download/316951/1552832286.svg', price: 15.99, currency: 'USD'},
        {id: 2, name: 'Second product', code: 'cde-cde',
        imageUrl: 'https://openclipart.org/download/316951/1552832287.svg', price: 18888, currency: 'USD'},
        {id: 3, name: 'Third product', code: 'cde-unkown-currency',
        imageUrl: 'https://openclipart.org/download/316951/1552832287.svg', price: 18888}
    ];
  }

  ngOnInit() {
    console.log("In init");
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
