import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';
import { ListCustomersComponent } from './core/components/customers/list-customers/list-customers.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomePrincipalComponent, children:[
    { path: 'customers', component: ListCustomersComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
