import { Name } from '@Entities/name.entity';
import { User } from '@Entities/user.entity';
import { NameDto } from './name.dto';

export class UserDto {
  id: string;

  username: string;
  password: string;

  name: NameDto;

  toEntity() {
    const user = new User();

    user.id = this.id;
    user.username = this.username;
    user.password = this.password;

    const name = new Name();
    name.first = this.name.first;
    name.last = this.name.last;

    user.name = name;
    return user;
  }
}
