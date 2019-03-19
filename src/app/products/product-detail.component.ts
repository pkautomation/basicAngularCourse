import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'detail title';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = {
      id,
      name : 'ABC',
      code : 'abc-def'
    }
  }

}
