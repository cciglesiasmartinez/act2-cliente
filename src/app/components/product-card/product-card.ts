import { Component, Input } from '@angular/core';
import { Product, ProductService } from '../../services/product';

/**
 * Componente para mostrar la tarjeta de un producto.
 */
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.product._id);
  }

}
