import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryServiceService } from 'src/app/core/useCases/services/delivery-service/delivery-service.service';
import { DeliveryDTO } from './../../../../models/modelDeliveryDTO';
import { Address } from './../../../../models/modelAddress';

@Component({
  selector: 'app-confirm-delivery',
  templateUrl: './confirm-delivery.component.html',
  styleUrls: ['./confirm-delivery.component.scss']
})
export class ConfirmDeliveryComponent {

  address!: Address;
  deliveryDTO: DeliveryDTO = {
    id: 0,
    sender: {
      id: 0,
      customerName: '',
      address: this.address,
      phoneNumber: '',
      whatsapp: '',
      principalEmail: '',
      responsibleEmployee: '',
      emailList: [],
      cpf: '',
      cnpj: '',
      corporateName: ''
    },
    recipient: {
      id: 0,
      customerName: '',
      address: this.address,
      phoneNumber: '',
      whatsapp: '',
      principalEmail: '',
      responsibleEmployee: '',
      emailList: [],
      cpf: '',
      cnpj: '',
      corporateName: ''
    },
    statusDelivery: '',
    passwordDelivery: '',
    dateSolicitation: '',
    freightValue: 0,
    itemsList: []
  };
  id: string = '';
  passwordDelivery: string = '';
  check: string = "";

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id') ?? '';
    if (this.id){
       this.findById();
    }
  }

  constructor(
    private deliveryService: DeliveryServiceService,
    private toastr: ToastrService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) {  }

  findById() {
    this.deliveryService.findById(this.id).subscribe(
      response => {
        this.deliveryDTO = response;
      },
      error => {
        this.toastr.error('Erro ao confirmar entrega!');
      })
    }

    confirmDelivery() {
      const password = this.passwordDelivery;

      this.deliveryService.confirmDelivery(this.deliveryDTO.id, password).subscribe(
        response => {
          this.toastr.success('Entrega confirmada com sucesso!');
          this.route.navigate(['/gwsistemas/deliveries']);
        },
        error => {
          this.toastr.error('Erro ao confirmar entrega!');
        }
      );
    }

  validation(): boolean {
    return this.check === 'Confirmar';
  }

}
