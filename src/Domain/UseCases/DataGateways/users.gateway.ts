import { User } from '@Entities/user.entity';

export interface Users {
  findAll(): Promise<User[]>;
}
