import { Name } from './name.entity';

export class User {
  id: string;

  username: string;
  password: string;

  name: Name;

  comparePassword(password: string): boolean {
    return this.password === password;
  }
}
