import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts, Ipstatus } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productIdE ! : number;
  ProductObjE ! : Iproducts;
  constructor(private _route : ActivatedRoute, private _productservice : ProductsService,private _router : Router) { }

  ngOnInit(): void {
    this.productIdE = +this._route.snapshot.params['productid'];
    this.ProductObjE = this._productservice.getSingleProduct(this.productIdE)!
  }
  onproductUpdate(name : HTMLInputElement, status : HTMLSelectElement){
    let obj : Iproducts = {
      pname : name.value,
      pstatus : status.value as Ipstatus,
      pid : this.productIdE
    }
    this._productservice.getUpdateproduct(obj)
    this._router.navigate(['/products', this.productIdE])
  }
}
