import { User } from '@Entities/user.entity';
import { Users } from '@UseCases/DataGateways/users.gateway';

const fakeUsers = [
  {
    name: { first: '승혁', last: '오' },
    username: 'username',
    password: 'password',
  },
];

export class UsersRepository implements Users {
  async findAll(): Promise<User[]> {
    return fakeUsers;
  }
}
