import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  UserId ! : number;
  userobj ! : Iusers;
  constructor(private _route : ActivatedRoute, private _userService : UsersService) { }

  ngOnInit(): void {
    //console.log(this._route.snapshot)
    // this.UserId = +this._route.snapshot.params['userid'];
    // this.userobj = this._userService.getSingleUser(this.UserId);
    // console.log(this.userobj)

    this._route.params
        .subscribe((myparams : Params)=>{
          console.log(myparams)
          this.UserId = +myparams['userid'];
          this.userobj = this._userService.getSingleUser(this.UserId);
        });
  }

}
