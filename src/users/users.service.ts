import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
  @Injectable()
  export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findByEmail(email: string) {
      return this.userRepository.findOne({ where: { email } });
    }
    
    async create(data: { email: string; username: string; password: string }) {
      const user = this.userRepository.create(data);
      return this.userRepository.save(user);
    }

    
  }
  

