import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = new User();
    user.email = createUserDto.email;
    user.password = hashedPassword;
    user.name = createUserDto.name;
    user.salt = salt;

    await this.userRepository.save(user);

    delete user.password;
    delete user.salt;
    delete user.deleted_at;

    return user;
  }

  async findAll() {
    return await this.userRepository.find({});
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
