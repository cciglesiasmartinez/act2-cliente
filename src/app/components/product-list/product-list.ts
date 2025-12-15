import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductCard } from '../product-card/product-card';

/**
 * Componente para mostrar la lista de productos.
 */
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  protected products: Product[] = [];

  /**
   * Constructor del componente ProductList.
   * @param productService Servicio para obtener los productos.
   */
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (datos: Product[]) => {
        this.products = datos;
        console.log('Productos cargados en el componente:', this.products);
      });
  }
  
}
