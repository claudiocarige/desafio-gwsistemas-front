import { Component, inject, ViewChild } from '@angular/core';
import { DeliveryDTO } from 'src/app/core/models/modelDeliveryDTO';
import { DeliveryServiceService } from 'src/app/core/useCases/services/delivery-service/delivery-service.service';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss']
})
export class ListDeliveryComponent {


  deliveryDtO: DeliveryDTO [] = [];

  displayedColumns: string[] = ['id', 'sender', 'recipient',
                    'statusDelivery','freightValue','itemsList', 'acoes'];
  private deliveryService = inject(DeliveryServiceService);

  constructor(){}

  ngOnInit(): void {
    this.findAllDeliveries();
  }

  findAllDeliveries() {
    console.log('FINDALL DELIVERIES PARA API GW SISTEMAS');
    this.deliveryService.findAllDeliveries().subscribe((data) => {
      if (Array.isArray(data)) {
        this.deliveryDtO = data.filter(delivery => delivery.statusDelivery === 'PENDING'); // Filtra aqui
      } else if (data) {
        this.deliveryDtO = (data as DeliveryDTO).statusDelivery === 'PENDING' ? [data] : [];
      }
    });
  }
}
