import { Component, signal } from '@angular/core';
import { ProductService, Product } from './services/product';
import { ProductList } from './components/product-list/product-list';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductFilterComponent } from './components/product-filter/product-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductFormComponent, CommonModule, ProductFilterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad2');

  constructor(private productService: ProductService) {
  }

  /** 
   * Maneja el evento de creación de un nuevo producto 
   */
  onProductCreated(newProduct: Product) {
    this.productService.addProduct(newProduct);
  }

}
