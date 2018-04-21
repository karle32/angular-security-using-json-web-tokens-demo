import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[];
  securityObject: AppUserAuth = null;

  constructor(private productService: ProductService,
    private router: Router,
    private securityService: SecurityService) {
      this.securityObject = this.securityService.securityObject;
    }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  addProduct(): void {
    this.router.navigate(['/productDetail', -1]);
  }

  deleteProduct(id: number): void {
    if (confirm('Delete this product?')) {
      this.productService.deleteProduct(id)
        .subscribe(() => this.products = this.products.filter(p => p.productId !== id));
    }
  }
}
