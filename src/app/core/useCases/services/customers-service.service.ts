import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDTO } from '../../models/modelCustomerDTO';
import { API_URL } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  private http = inject(HttpClient);

  constructor() { }

  findAll(): Observable<CustomerDTO[]>{
    let customers = this.http.get<CustomerDTO[]>(`${API_URL.urlBase}/api/v1/customers/list`);
    return customers;
  }
}
