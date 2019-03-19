import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private http: HttpClient) {}

  private productUrl = 'api/products/products.json';

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    const errorMessage = 'error in retrieving message';
    return throwError('backend error');
  }
}
