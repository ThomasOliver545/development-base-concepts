import { Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {getAllUsersResolver} from './resolvers/user.resolver';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    // the resolver is executed as soon as the user is navigating to our path ('')
    // the data that is returned by the resolver is being stored in the
    // activatedRoute.data['users']  (whatever you name the property here)
    resolve: {
      users: getAllUsersResolver
    }
  }
];
