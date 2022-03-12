import { UserEntity } from '@Adapters/schemas/user.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@UseCases/DataGateways/users.gateway';
import { UserDto } from '@UseCases/Dtos/user.dto';
import { Repository } from 'typeorm';

export class UsersRepository implements Users {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserDto[]> {
    const userEntities = await this.usersRepository.find();

    return userEntities.map((user) => this.toModel(user));
  }

  toModel(userEntity: UserEntity) {
    const user = new UserDto();

    const { id, name, username, password } = userEntity;

    user.id = id;
    user.name = name;
    user.username = username;
    user.password = password;

    return user;
  }
}
