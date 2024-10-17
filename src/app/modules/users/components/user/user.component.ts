import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserInterface} from '../../interfaces/user-interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: UserInterface;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  toDetails() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }
}
