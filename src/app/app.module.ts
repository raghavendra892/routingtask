import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { EdituserComponent } from './shared/component/users/edituser/edituser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavdropdownDirective } from './shared/directive/navdropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent,
    UserComponent,
    ProductComponent,
    PageNotFoundComponent,
    EditProductComponent,
    EdituserComponent,
    NavdropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
