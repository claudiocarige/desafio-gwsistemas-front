import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';

const routes: Routes = [
  { path:'home', component: HomePrincipalComponent, children:[

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
