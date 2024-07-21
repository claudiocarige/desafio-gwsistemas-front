import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryServiceService } from 'src/app/core/useCases/services/delivery-service/delivery-service.service';
import { DeliveryDTO } from './../../../../models/modelDeliveryDTO';

@Component({
  selector: 'app-confirm-delivery',
  templateUrl: './confirm-delivery.component.html',
  styleUrls: ['./confirm-delivery.component.scss']
})
export class ConfirmDeliveryComponent {

  deliveryDTO!: DeliveryDTO;
  id: string = '';
  passwordDelivery: string = '';
  check: string = "";

  private deliveryservise = inject(DeliveryServiceService);
  private toastr = inject(ToastrService);
  private route = inject(Router);
  private activateRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id') ?? '';
    this.findById();
  }

  constructor() {

  }

  findById() {
    this.deliveryservise.findById(this.id).subscribe(
      response => {
        this.deliveryDTO = response;
      },
      error => {
        this.toastr.error('Erro ao confirmar entrega!');
      })
    }

    confirmDelivery() {
      const password = this.passwordDelivery;

      this.deliveryservise.confirmDelivery(this.deliveryDTO.id, password).subscribe(
        response => {
          this.toastr.success('Entrega confirmada com sucesso!');
          this.route.navigate(['/home/deliveries']);
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
