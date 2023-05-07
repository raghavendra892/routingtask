import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArray : Array<Iusers> = [
    {
      username : "jhon",
      id : 1
    },
    {
      username : "jen",
      id : 2
    },
    {
      username : "july",
      id : 3
    }
  ];
  constructor(private _snackbarService : SnackbarService) { }

  getAllUsers():Array<Iusers>{
    return this.usersArray
  }
  getSingleUser(id : number){
    return this.usersArray.find(ele => ele.id === id)!
  }
  upadteuser(uobj : Iusers){
    this.usersArray.forEach(user => {
      if(user.id === uobj.id){
        user.username = uobj.username
      }
    })
    this._snackbarService.openSnackBar(`${uobj.username} is Updated successfully`)
  }
}
