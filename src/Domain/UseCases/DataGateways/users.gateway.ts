import { UserDto } from '@UseCases/Dtos/user.dto';

export interface Users {
  findAll(): Promise<UserDto[]>;
}
