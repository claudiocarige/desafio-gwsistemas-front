import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Address } from 'src/app/core/models/modelAddress';
import { Item } from 'src/app/core/models/modelItem';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss'],
})
export class TableComponentComponent {

  @Input() ELEMENT_DATA: any[] = [];

  @Input() displayedColumns: string[] = [];

  colunas: string[] = [];

  addressFormated: string = '';

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.colunas = this.displayedColumns;
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnChanges(): void {
    this.dataSource.data = this.ELEMENT_DATA;
  }

  formatAddress(address: Address): string {
    return this.addressFormated = `${address.street}, ${address.number}, ${address.city},
                            ${address.state}, ${address.postalCode}`;
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
