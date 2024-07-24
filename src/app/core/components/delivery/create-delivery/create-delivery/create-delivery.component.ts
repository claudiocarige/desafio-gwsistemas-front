import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryResponse } from 'src/app/core/models/modelDeliveryResponse';
import { Product } from 'src/app/core/models/modelProduct';
import { DeliveryServiceService } from 'src/app/core/useCases/services/delivery-service/delivery-service.service';
import { ProductServiceService } from 'src/app/core/useCases/services/product-service/product-service.service';
import { CustomerDTO } from 'src/app/core/models/modelCustomerDTO';
import { CustomersServiceService } from 'src/app/core/useCases/services/customers-service/customers-service.service';
import { DeliveryRequest } from 'src/app/core/models/modelDeliveryRequest';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.scss']
})
export class CreateDeliveryComponent {

  deliveryResponse: DeliveryResponse = {
    senderId: 0,
    recipientId: 0,
    productId: 0,
    quantity: 0
  };

  products: Product[] = [];
  selectedSenderId: number | null = null;
  selectedRecipientId: number | null = null;
  selectedProductId: number | null = null;
  quantityProduct: string = '';
  customersDTO: CustomerDTO[] = [];
  senderCpfOrCnpj: string = '';
  productName: string = '';
  recipientCpfOrCnpj: string = '';
  check: string = '';
  deliveryRequest!: DeliveryRequest;

  private deliveryService = inject(DeliveryServiceService);
  private productService = inject(ProductServiceService);
  private customersService = inject(CustomersServiceService);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadCustomers();
    this.loadProducts();
  }

  loadCustomers() {
    this.customersService.findAll().subscribe(
      data => {
        this.customersDTO = data;
        console.log("Log Customers:", this.customersDTO); // Adiciona o log dentro do subscribe
      },
      error => {
        this.toastr.error('Erro ao carregar clientes.');
        console.error(error); // Log do erro
      }
    );
  }

  loadProducts() {
    this.productService.findAllProducts().subscribe(
      data => {
        this.products = data;
        console.log("Log Produtos:", this.products); // Adiciona o log dentro do subscribe
        if (this.products.length === 0) {
          this.toastr.error('Erro ao carregar Produtos.');
        }
      },
      error => {
        this.toastr.error('Erro ao carregar produtos.');
        console.error(error); // Log do erro
      }
    );
  }


  findCustomerIdByCpfOrCnpj(cpfOrCnpj: string): number | null {
    const customer = this.customersDTO.find(c => c.cpfOrCnpj === cpfOrCnpj);
    if (customer) {
      return customer.id;
    } else {
      this.toastr.error(`Cliente com CPF ou CNPJ ${cpfOrCnpj} não encontrado.`);
      return null;
    }
  }

  findProductByIdProductName(nameProduct: string): number {
    const product = this.products.find(p => p.name === nameProduct);
    if (product) {
      return product.id;
    } else {
      this.toastr.error(`Produto com nome ${nameProduct} não encontrado.`);
      return 0;
    }
  }

  createDelivery(){
    this.deliveryResponse.senderId = this.findCustomerIdByCpfOrCnpj(this.senderCpfOrCnpj) || 0;
    this.deliveryResponse.recipientId = this.findCustomerIdByCpfOrCnpj(this.recipientCpfOrCnpj) || 0;
    this.deliveryResponse.productId = this.findProductByIdProductName(this.productName);
    console.log("ProductId : ", this.deliveryResponse.productId);
    this.deliveryResponse.quantity = Number(this.quantityProduct);
    console.log("Quantidade : ", this.deliveryResponse.quantity);

    this.deliveryService.createDelivery(this.deliveryResponse).subscribe(
      data => {
        this.deliveryRequest = data;
        this.toastr.success(this.deliveryRequest.mensage);
        this.router.navigate(['/gwsistemas/deliveries']);
      },
      error => this.toastr.error('Erro ao criar entrega.'));
  }

  validation(): boolean {
    const quantity = Number(this.quantityProduct);
    if (this.senderCpfOrCnpj != '' && this.recipientCpfOrCnpj != '' && this.productName != '' && quantity > 0) {
      return true;
    }
    return false;
  }

  errorMensageToastr(): void {
    this.toastr.error('Preencha todos os campos corretamente.');
  }

}
