import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/api.config';
import { DeliveryDTO } from 'src/app/core/models/modelDeliveryDTO';

@Injectable({
  providedIn: 'root'
})
export class DeliveryServiceService {

  private http = inject(HttpClient);

  constructor() { }

  findAll(): Observable<DeliveryDTO[]>{
    let deliveries = this.http.get<DeliveryDTO[]>(`${API_URL.urlBase}/api/v1/delivery/list`);
    return deliveries;
  }
}
