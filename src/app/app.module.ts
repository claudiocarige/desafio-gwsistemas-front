import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';
import { HeaderPrincipalComponent } from './core/components/header-principal/header-principal.component';
import { FooterPrincipalComponent } from './core/components/footer-principal/footer-principal.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCustomersComponent } from './core/components/customers/list-customers/list-customers.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListDeliveryComponent } from './core/components/delivery/list-delivery/list-delivery.component';
import { ToastrModule } from 'ngx-toastr';
import { CreateDeliveryComponent } from './core/components/delivery/create-delivery/create-delivery/create-delivery.component';
import { ConfirmDeliveryComponent } from './core/components/delivery/confirm-delivery/confirm-delivery/confirm-delivery.component';
import { MatOptionModule } from '@angular/material/core';
import { ApresentationComponent } from './core/components/apresentation/apresentation/apresentation.component';
import { ListProductsComponent } from './core/components/products/list-products/list-products.component';
import { TableComponentComponent } from './core/components/component/table-component/table-component/table-component.component';



@NgModule({
  declarations: [AppComponent, HomePrincipalComponent, HeaderPrincipalComponent, FooterPrincipalComponent, SideMenuComponent, ListCustomersComponent, ListDeliveryComponent, CreateDeliveryComponent, ConfirmDeliveryComponent, ApresentationComponent, ListProductsComponent, TableComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule ,


    ToastrModule.forRoot({
      easeTime: 800,
      timeOut: 3200,
      positionClass:  'toast-top-right',
      closeButton: true
   })


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
