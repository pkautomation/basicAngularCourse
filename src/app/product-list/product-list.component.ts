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

  filteredProducts: IProduct[];

// tslint:disable-next-line: variable-name
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor() {
    this.products = [
      {id: 1, name: 'first product', code: 'abc-abc',
      imageUrl: 'https://openclipart.org/download/316951/1552832286.svg', price: 15.99, currency: 'USD', rating: 4.5},
      {id: 2, name: 'Second product', code: 'cde-cde',
      imageUrl: 'https://openclipart.org/download/316951/1552832287.svg', price: 18888, currency: 'USD', rating: 1.0},
      {id: 3, name: 'Third product', code: 'cde-unkown-currency',
      imageUrl: 'https://openclipart.org/download/316951/1552832287.svg', price: 18888, rating: 3}
    ];
    this.listFilter = 'product';
  }

  ngOnInit() {
    console.log('In init');
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'product list: ' + message;
  }
}
