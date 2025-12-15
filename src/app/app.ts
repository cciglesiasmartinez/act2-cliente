import { Component, signal } from '@angular/core';
import { ProductService, Product } from './services/product';
import { ProductList } from './components/product-list/product-list';
import { ProductFormComponent } from './components/product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad2');

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (datos: Product[]) => {
        console.log('Datos recibidos del servicio:', datos);
      }
    );
  }

  onProductCreated(newProduct: Product) {
    console.log('Nuevo producto creado:', newProduct);
    // Aquí podrías agregar lógica para añadir el nuevo producto a la lista existente
  }

}
