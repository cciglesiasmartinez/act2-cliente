import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

/**
 * Componente para el formulario de creación de productos.
 */
@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductFormComponent {
  /**
   * Evento que emite el producto creado al enviar el formulario.
   */
  @Output() createdProduct = new EventEmitter<any>();

  /**
   * Formulario reactivo para crear un nuevo producto.
   */
  form = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(0),
    active: new FormControl(true),
    category: new FormControl(''),
    description: new FormControl(''),
  });

  /**
   * Maneja el envío del formulario y emite el producto creado.
   */
  onSubmit() {
    if (this.form.valid) {
      this.createdProduct.emit(this.form.value);
      this.form.reset( // Reinicia con valores por defecto 
        {
          name: '',
          image: '',
          price: 0,
          active: true,
          category: '',
          description: '' 
        }
      );
    }
  }

}
