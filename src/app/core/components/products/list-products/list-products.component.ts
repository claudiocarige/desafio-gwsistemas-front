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


  products: (Product)[] = [];


  displayedColumns: string[] = ['id', 'name', 'weight',
                    'volume','quantityStock', 'value'];

  columnMap = {
    'id': 'id',
    'name': 'nome',
    'weight': 'peso (kg)',
    'volume': 'volume (m³)',
    'quantityStock': 'quantidade em estoque (un)',
    'value': 'valor (R$)'
  };

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
          this.products = data;
        } else if (data) {
          this.products = [data];
        }
  }});
  }
}
