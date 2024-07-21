import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryResponse } from 'src/app/core/models/modelDeliveryResponse';
import { DeliveryServiceService } from 'src/app/core/useCases/services/delivery-service/delivery-service.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.scss']
})
export class CreateDeliveryComponent {


  response!: DeliveryResponse;







}
