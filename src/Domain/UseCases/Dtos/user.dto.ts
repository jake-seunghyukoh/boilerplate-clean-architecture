import { NameDto } from './name.dto';

export class UserDto {
  id: string;

  username: string;
  password: string;

  name: NameDto;
}
