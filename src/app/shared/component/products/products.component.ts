import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productInfo : Array<Iproducts> = []
  selectedProductid ! : number;
  constructor(private _productsService : ProductsService, private _router : Router) { }

  ngOnInit(): void {
    this.productInfo = this._productsService.getAllProducts();
    this.selectedProductid = this.productInfo[0].pid
  }

  onuserClick(){
    this._router.navigate(['/users']);
  }

}
