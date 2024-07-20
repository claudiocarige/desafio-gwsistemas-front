import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { IndividualCustomer } from 'src/app/core/models/modelIndividualCustomer';
import { CompanyCustomer } from 'src/app/core/models/moldelCompanyCustomer';
import { Customer } from 'src/app/core/models/modelCustomer';
import { CustomerDTO } from 'src/app/core/models/modelCustomerDTO';
import { CustomersServiceService } from 'src/app/core/useCases/services/customers-service.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent {



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
