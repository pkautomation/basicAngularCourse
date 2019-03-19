import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  errorMessage = 'error!!!';

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

  ngOnInit() {
     this.productService.getProducts().subscribe(
      products => {
        this.products = products,
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
      },
      error => this.errorMessage = error
    );
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
