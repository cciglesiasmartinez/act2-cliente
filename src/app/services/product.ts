import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}  
  
  /**
   * Obtiene la lista de productos desde la API.
   * @returns  Observable<Product[]> Lista de productos.
   */
  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

}
