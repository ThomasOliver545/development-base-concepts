import { Controller, Get, Post, Body } from '@nestjs/common';
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";


// route: localhost:3000/api/users
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // route: POST localhost:3000/api/users
    @Post()
    createUser(@Body('name') name: string) {
        return this.userService.createUser(name);
    }

    // route: GET localhost:3000/api/users
    @Get()
    getAllUsers() {
        return this.userService.findAllUsers();
    }

    // route: GET localhost:3000/api/users/delayed
    @Get('/delayed')
    async getAllUsersDelayed(): Promise<UserEntity[]> {
        // delay resp. for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        return this.userService.findAllUsers();
    }
}
