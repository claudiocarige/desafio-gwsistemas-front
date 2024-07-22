import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/models/modelProduct';
import { ProductServiceService } from 'src/app/core/useCases/services/product-service/product-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {


  ELEMENT_DATA: (Product)[] = [];


  displayedColumns: string[] = ['id', 'name', 'weight',
                    'volume','quantityStock', 'value'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  private productyService = inject(ProductServiceService);


  constructor(){}

  ngOnInit(): void {
    this.findAllDeliveries();
  }

  findAllDeliveries() {
    console.log('FINDALL PRODUCTS FOR API GW SISTEMAS');
    this.productyService.findAllProducts().subscribe((data) => {
      {
        if (Array.isArray(data)) {
          this.ELEMENT_DATA = data;
        } else if (data) {
          this.ELEMENT_DATA = [data];
        }
        console.log(data);
        this.dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
  }});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
