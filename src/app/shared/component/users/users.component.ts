import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userInfo : Array<Iusers> = [];
  selecteduser !: Iusers;
  selectedUserId1 ! : number;
  constructor(private _userService : UsersService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userInfo = this._userService.getAllUsers();
    this.selecteduser = this.userInfo[0]
    this.selectedUserId1 = +this._route.snapshot.params['userid']
    console.log(this.selectedUserId1)
  }

}
