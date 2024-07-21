import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeliveryDTO } from 'src/app/core/models/modelDeliveryDTO';
import { Item } from 'src/app/core/models/modelItem';
import { DeliveryServiceService } from 'src/app/core/useCases/services/delivery-service/delivery-service.service';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss']
})
export class ListDeliveryComponent {



  ELEMENT_DATA: (DeliveryDTO)[] = [];

  displayedColumns: string[] = ['id', 'sender', 'recipient',
                    'statusDelivery','freightValue','itemsList', 'acoes'];
  dataSource = new MatTableDataSource<DeliveryDTO>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  private deliveryService = inject(DeliveryServiceService);


  constructor(){}

  ngOnInit(): void {
    this.findAllDeliveries();
  }

  findAllDeliveries() {
    console.log('FINDALL DELIVERIES PARA API GW SISTEMAS');
    this.deliveryService.findAllDeliveries().subscribe((data) => {
      if (Array.isArray(data)) {
        this.ELEMENT_DATA = data.filter(delivery => delivery.statusDelivery === 'PENDING'); // Filtra aqui
      } else if (data) {
        this.ELEMENT_DATA = (data as DeliveryDTO).statusDelivery === 'PENDING' ? [data] : [];
      }
      console.log(data);
      this.dataSource = new MatTableDataSource<DeliveryDTO>(this.ELEMENT_DATA);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  formatItemsList(itemsList: Item): string {
    return `Product - ${itemsList.productName},<br>` +
         `Valor - ${itemsList.itemShippingValue},<br>` +
         `Quant. - ${itemsList.quantity},<br>`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
