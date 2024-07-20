import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';

@NgModule({
  declarations: [AppComponent, HomePrincipalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
