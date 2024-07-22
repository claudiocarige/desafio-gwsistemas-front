import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/api.config';
import { Product } from 'src/app/core/models/modelProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private http = inject(HttpClient);

  constructor() { }

  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL.urlBase}/api/v1/products`);
  }
}
