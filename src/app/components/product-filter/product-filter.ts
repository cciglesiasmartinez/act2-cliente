import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilterComponent {

  constructor(private productService: ProductService) {}

  onNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.productService.filterProductsByName(input.value); 
  }

  onCategoryChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.productService.filterProductsByCategory(input.value); 
  }

  onActiveChange(event: Event) {
    const input = (event.target as HTMLInputElement).checked;
    this.productService.filterProductsByActiveStatus(input);
  }

}
