import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }
  deleteProductHandler(productId: any) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(
        (product: any) => product.id != productId
      );
    });
  }
}
