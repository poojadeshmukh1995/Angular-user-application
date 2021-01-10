import { Component, OnInit, OnChanges } from '@angular/core';
import { IUserList } from '../core/model';
import { Data } from '../core/userData';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
   selector: 'app-user-list',
   templateUrl: './user-list.component.html',
   styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {
   userListArray: IUserList[] = Data.userDummylist;
   isAddUser: boolean;
   totalUsers = 0;
   newUser: IUserList;
   maleUsers = 0;
   feMaleUsers = 0;
   userListTableHeading = ['Name', 'Birth Date', 'Languages', 'Gender'];
   constructor() { }
   ngOnChanges() {
   }

   ngOnInit() {
      this.differentiateUsers();
   }
   // method to add new user
   newUserData(event) {
      this.userListArray.push(event);
      this.userListArray.forEach((item) => {
         item.dob = new Date(item.dob);
      })
      this.totalUsers = this.userListArray.length < 10 ? this.totalUsers = this.userListArray.length * 10 : 100;
      this.differentiateUsers();
   }
   // method to differentiate female and male users
   differentiateUsers() {
      const femaleUsers = this.userListArray.filter((item) => {
         return item.gender === 'Female';
      });
      this.feMaleUsers = femaleUsers.length;
      this.maleUsers = this.userListArray.length - this.feMaleUsers;
   }

}
