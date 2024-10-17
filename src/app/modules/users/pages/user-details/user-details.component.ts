import {Component, OnInit} from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {UserService} from '../../servaces/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
user:UserInterface


constructor(private userService:UserService, private activatedRoute: ActivatedRoute) {
}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(({id}) => {
    this.userService.getById(id).subscribe(value => this.user = value)
  })
  }

}
