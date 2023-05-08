import { Injectable } from '@angular/core';
import { Iproducts } from '../model/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productArray : Array<Iproducts> =[
  {
    pname : "Samsung 31",
    pid : 1,
    pstatus : "In-progress"
  },
  {
    pname : "Samsung s 23 Ultra",
    pid : 2,
    pstatus : "Dispatched"
  },
  {
    pname : "Iphone",
    pid : 3,
    pstatus : "Delivered"
  },
  {
    pname : "Vivo v25 Pro",
    pid : 4,
    pstatus : "Delivered"
  }
];
  constructor(private _snackbarService : SnackbarService) { }

  getAllProducts():Array<Iproducts>{
    return this.productArray
  }

  getSingleProduct(id:number){
   return this.productArray.find(prod => prod.pid === id)
  }

  getUpdateproduct(pobj : Iproducts){
    this.productArray.forEach(ele => {
      if(ele.pid === pobj.pid){
        ele.pname = pobj.pname;
        ele.pstatus = pobj.pstatus;
      }
    })
    this._snackbarService.openSnackBar(`${pobj.pname} is Updated successfully`)
  }
  
}
