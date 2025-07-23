import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
  @Injectable()
  export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  
    async createUser(data: CreateUserDto) {
      const hashPassword = await bcrypt.hash(data.password, 10);
      const user = this.userRepo.create({
        ...data,
        password: hashPassword
      }); // maps dto to entity
      return this.userRepo.save(user); // saves to DB
    }

    async findByEmail(email: string) {
      return this.userRepo.findOne({ where: { email } });
    }
    
  }
  

