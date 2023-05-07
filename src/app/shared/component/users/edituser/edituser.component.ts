import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  userIdE ! : number;
  UserObjE ! : Iusers;
  constructor(private _route : ActivatedRoute, private _usersService : UsersService, private _router : Router) { }

  ngOnInit(): void {
    this.userIdE = +this._route.snapshot.params['userid'];
    this.UserObjE = this._usersService.getSingleUser(this.userIdE)
  }

  onUserUpadte(uname : HTMLInputElement){
    let obj : Iusers = {
      username : uname.value,
      id : this.userIdE
    }
    this._usersService.upadteuser(obj);
    this._router.navigate(['/users', this.userIdE])
  }
}
