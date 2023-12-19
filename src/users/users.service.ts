/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import {  CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    createUser(user: CreateUserDTO){
        const newUser = this.userRepository.create(user)
        this.userRepository.save(newUser)
    }

    getUsers(){
        return this.userRepository.find()
    }

    getUser(id: number){
        return this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    deleteUser(id: number){
        return this.userRepository.delete({ id });
    }

    updateUser(id: number, user: UpdateUserDTO){
        this.userRepository.update({id}, user)
    }
}
