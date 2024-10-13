import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient = inject(HttpClient);
  private usersApi = 'http://localhost:3000/api/users/delayed';

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersApi);
  }
}
