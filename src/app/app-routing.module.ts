import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';
import { ListCustomersComponent } from './core/components/customers/list-customers/list-customers.component';
import { DeliveryServiceService } from './core/useCases/services/delivery-service/delivery-service.service';
import { ListDeliveryComponent } from './core/components/delivery/list-delivery/list-delivery.component';
import { ConfirmDeliveryComponent } from './core/components/delivery/confirm-delivery/confirm-delivery/confirm-delivery.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomePrincipalComponent, children:[
    { path: 'customers', component: ListCustomersComponent},
    { path: 'deliveries', component: ListDeliveryComponent},
    { path: 'deliveries/confirm-delivery/:id', component: ConfirmDeliveryComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
