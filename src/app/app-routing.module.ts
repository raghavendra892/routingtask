import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { EditProductComponent } from "./shared/component/products/edit-product/edit-product.component";
import { EdituserComponent } from "./shared/component/users/edituser/edituser.component";


const routes: Routes = [
    {
        path : '', component : DashboardComponent
    },
    
    //  {
    //    path : '', redirectTo :  'home', pathMatch : 'full' //localhost:4200/home (path empty then also show DashboardComponent)
    //   },
    // {
    //   path : 'home', component : DashboardComponent // localhost:4200/home
    // },
  
    {
        path : 'users', component : UsersComponent // localhost:4200/users
    },
    {
        path : 'users/:userid', component : UserComponent // localhost:4200/users
    },
    {
        path : 'products', component : ProductsComponent // localhost:4200/users
    },
    {
        path : "products/:productid", component : ProductComponent // localhost:4200/users
    },
    {
        path : "products/:productid/edit" , component : EditProductComponent
    },
    {
        path : "users/:userid/edit" , component : EdituserComponent
    },
    {
        path : '**', redirectTo : 'pagenotfound'
    },
    {
        path : 'pagenotfound', component : PageNotFoundComponent // localhost:4200/users
    }
  ]
  

@NgModule({
    imports :[
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]

})
export class AppRoutingModule{

}