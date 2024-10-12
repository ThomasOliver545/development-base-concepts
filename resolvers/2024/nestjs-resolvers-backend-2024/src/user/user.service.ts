import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {UserEntity} from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    // Insert initial users during module initialization
    async onModuleInit() {
        await this.seedInitialUsers();
    }

    createUser(name: string): Promise<UserEntity> {
        const newItem = this.userRepository.create({ name });
        return this.userRepository.save(newItem);
    }

    findAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    private async seedInitialUsers() {
        const count = await this.userRepository.count();
        if (count === 0) {
            // If no users are found, seed the database with some initial users
            const users = [
                { name: 'Alice'},
                { name: 'Bob' },
                { name: 'Charlie' },
            ];
            await this.userRepository.save(users);
        }
    }
}