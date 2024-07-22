import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/api.config';
import { DeliveryDTO } from 'src/app/core/models/modelDeliveryDTO';
import { DeliveryRequest } from 'src/app/core/models/modelDeliveryRequest';
import { DeliveryResponse } from 'src/app/core/models/modelDeliveryResponse';

@Injectable({
  providedIn: 'root'
})
export class DeliveryServiceService {

  private http = inject(HttpClient);

  constructor() { }

  findAllDeliveries(): Observable<DeliveryDTO[]>{
    let deliveries = this.http.get<DeliveryDTO[]>(`${API_URL.urlBase}/api/v1/delivery/list`);
    return deliveries;
  }


  confirmDelivery(deliveryId: number, password: string): Observable<DeliveryDTO> {

    return this.http.put<DeliveryDTO>(`${API_URL.urlBase}/api/v1/delivery/delivery-confirmation?deliveryId=${deliveryId}&confirmationCode=${password}`, {});
  }

  findById(id: string): Observable<DeliveryDTO> {
    return this.http.get<DeliveryDTO>(`${API_URL.urlBase}/api/v1/delivery/${id}`);
  }

  createDelivery(deliveryResponse: DeliveryResponse): Observable<DeliveryRequest> {
    return this.http.post<DeliveryRequest>(`${API_URL.urlBase}/api/v1/delivery/request-delivery/save`, deliveryResponse);
  }

}
