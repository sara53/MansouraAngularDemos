import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:3005/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.baseUrl);
  }

  getProductById(productId: any) {
    return this.http.get(`${this.baseUrl}/${productId}`);
  }
  addNewProduct(product: any) {
    return this.http.post(this.baseUrl, product);
  }

  editProduct(productId: any, product: any) {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }

  deleteProduct(productId: any) {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}
