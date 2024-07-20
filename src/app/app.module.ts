import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { HomePrincipalComponent } from './infra/pages/home-principal/home-principal.component';
import { HeaderPrincipalComponent } from './core/components/header-principal/header-principal.component';
import { FooterPrincipalComponent } from './core/components/footer-principal/footer-principal.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomePrincipalComponent, HeaderPrincipalComponent, FooterPrincipalComponent, SideMenuComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
