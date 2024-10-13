import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../services/user-service/user.service';
import {User} from '../models/user.interface';

// A resolver automatically subscribes and unsubscribes on the provided observable ( in our case our backend request against our nestjs service)
export const getAllUsersResolver: ResolveFn<User[]> = (route, state) => {
  const userService = inject(UserService);
  return userService.getAllUsers();
};
