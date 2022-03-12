import { UserEntity } from '@Adapters/schemas/user.schema';
import { User } from '@Entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@UseCases/DataGateways/users.gateway';
import { Repository } from 'typeorm';

export class UsersRepository implements Users {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  async findAll(): Promise<User[]> {
    const userEntities = await this.usersRepository.find();

    return userEntities.map((user) => this.toModels(user));
  }

  toModels(userEntity: UserEntity) {
    const user = new User();

    const { name, username, password } = userEntity;

    user.name = name;
    user.username = username;
    user.password = password;

    return user;
  }
}
