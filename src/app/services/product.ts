import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  active: boolean;
  category: string;
  description: string;
}

/**
 * Servicio para gestionar productos.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl = 'https://api.npoint.io/1dee63ad8437c82b24fe';

  /** Subject para manejar la lista de productos */
  private productSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productSubject.asObservable();

  private originalProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }  
  
  /**
   * Obtiene la lista de productos desde la API.
   * @returns  Observable<Product[]> Lista de productos.
   */
  getProducts(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (products) => {
        this.originalProducts = products;
        this.productSubject.next(products);
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
      }
    });
  }

  /**
   * Agrega un nuevo producto a la lista.
   * @param data Datos del nuevo producto.
   */
  addProduct(data: any) {
    const newProduct: Product = {
      _id: crypto.randomUUID(),
      name: data.name,
      image: data.image,
      price: data.price,
      active: data.active,
      category: data.category,
      description: data.description,
    };
    // Actualiza la lista de productos y emite el nuevo valor
    this.originalProducts = [newProduct, ...this.originalProducts];
    // Emite la lista actualizada de productos
    this.productSubject.next(this.originalProducts);
  }

  /**
   * Elimina un producto de la lista por su ID.
   * @param productId ID del producto a eliminar.
   */
  deleteProduct(productId: string) {
    this.originalProducts = this.originalProducts.filter(product => product._id !== productId);
    this.productSubject.next(this.originalProducts);
  }

  filterProductsByName(name: string) {
    const filteredProducts = this.originalProducts.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    this.productSubject.next(filteredProducts);
  }

  filterProductsByCategory(category: string) {
    const filteredProducts = this.originalProducts.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
    this.productSubject.next(filteredProducts);
  }

  filterProductsByActiveStatus(isActive: boolean) {
    const filteredProducts = this.originalProducts.filter(product =>
      product.active === isActive
    );
    this.productSubject.next(filteredProducts);
  }

}
