import { Component } from '@angular/core';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss']
})
export class ListDeliveryComponent {
  ELEMENT_DATA: (CustomerDTO)[] = [];

  displayedColumns: string[] = ['id', 'customerName', 'cpfOrCnpj',
                    'address','email','phoneNumber' , 'whatsapp','responsibleEmployee', 'acoes'];
  dataSource = new MatTableDataSource<CustomerDTO>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  private customersService = inject(CustomersServiceService);


  constructor(){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    console.log('FINDALL PARA API GW SISTEMAS');
    this.customersService.findAll().subscribe((data) => {
      if (Array.isArray(data)) {
        this.ELEMENT_DATA = data;
      } else if (data) {
        this.ELEMENT_DATA = [data];
      }
      console.log(data);
      this.dataSource = new MatTableDataSource<CustomerDTO>(this.ELEMENT_DATA);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

}
