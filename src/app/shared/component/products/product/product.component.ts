import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ProductId !: number;
  productobject !: Iproducts;
  constructor(private _route: ActivatedRoute, private _productservice: ProductsService) { } // it give data from current route it gives ActivatedRoute

  ngOnInit(): void {
    //console.log(this._route.snapshot)

    this.ProductId = +this._route.snapshot.params['productid'];
    // console.log(this.ProductId)
    this.productobject = this._productservice.getSingleProduct(this.ProductId)!;

    //console.log(this.productobject
    
    

    // this._route.params
    //   .subscribe((myparams : Params)=>{
    //     this.ProductId = +myparams['productid'];
    //     this.productobject = this._productservice.getSingleProduct(this.ProductId)!;
    //   })

  }

}
