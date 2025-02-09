import { Component, inject } from '@angular/core';
import { CustomerDTO } from 'src/app/core/models/modelCustomerDTO';
import { CustomersServiceService } from 'src/app/core/useCases/services/customers-service/customers-service.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent {

  customers: CustomerDTO[] = [];
  displayedColumns: string[] = [
    'id',
    'customerName',
    'cpfOrCnpj',
    'address',
    'principalEmail',
    'phoneNumber',
    'whatsapp',
    'responsibleEmployee'
  ];

  columnsMap = {
    'id': 'id',
    'customerName': 'nome',
    'cpfOrCnpj': 'cpf ou cnpj',
    'address': 'endereço',
    'principalEmail': 'e-mail',
    'phoneNumber': 'telefone',
    'whatsapp': 'whatsapp',
    'responsibleEmployee': 'responsável'
     };

  private customersService = inject(CustomersServiceService);

  constructor() {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    console.log('FINDALL PARA API GW SISTEMAS');

    this.customersService.findAll().subscribe((data) => {
      if (Array.isArray(data)) {
        this.customers = data;
      } else if (data) {
        this.customers = [data];
      }
    });
  }

}
