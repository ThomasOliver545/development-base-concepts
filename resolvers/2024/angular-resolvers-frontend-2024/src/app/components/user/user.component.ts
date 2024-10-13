import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  private activatedRoute = inject(ActivatedRoute);

  users: User[] = this.activatedRoute.snapshot.data['users'];

}
