import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';
import { ListCustomersComponent } from './core/components/customers/list-customers/list-customers.component';
import { DeliveryServiceService } from './core/useCases/services/delivery-service/delivery-service.service';
import { ListDeliveryComponent } from './core/components/delivery/list-delivery/list-delivery.component';
import { ConfirmDeliveryComponent } from './core/components/delivery/confirm-delivery/confirm-delivery/confirm-delivery.component';
import { CreateDeliveryComponent } from './core/components/delivery/create-delivery/create-delivery/create-delivery.component';
import { ApresentationComponent } from './core/components/apresentation/apresentation/apresentation.component';
import { ListProductsComponent } from './core/components/products/list-products/list-products.component';

const routes: Routes = [
  { path: '', redirectTo:'/gwsistemas/apresentation', pathMatch:'full'},
  { path:'gwsistemas', component: HomePrincipalComponent, children:[
    { path: 'customers', component: ListCustomersComponent},
    { path: 'deliveries', component: ListDeliveryComponent},
    { path: 'deliveries/confirm-delivery/:id', component: ConfirmDeliveryComponent},
    { path: 'deliveries/create-delivery', component: CreateDeliveryComponent},
    { path: 'apresentation', component: ApresentationComponent},
    { path: 'products', component: ListProductsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
