import {Component, OnInit} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {UserService} from '../../servaces/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: UserInterface[];


  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

}
