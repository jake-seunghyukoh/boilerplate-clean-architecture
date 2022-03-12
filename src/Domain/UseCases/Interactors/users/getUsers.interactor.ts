import { Name } from '@Entities/name.entity';
import { User } from '@Entities/user.entity';
import { Users } from '@UseCases/DataGateways/users.gateway';
import { UserDto } from '@UseCases/Dtos/user.dto';
import { GetUsersOutputModel } from '@UseCases/Models/users/getUsersOutput.model';
import { UseCasePortWithoutInput } from '@UseCases/Ports/useCasePort';

export class GetUsersInteractor
  implements UseCasePortWithoutInput<Promise<GetUsersOutputModel[]>>
{
  constructor(private readonly usersDataGateway: Users) {}

  async execute(): Promise<GetUsersOutputModel[]> {
    const userDtos = await this.usersDataGateway.findAll();

    const users = userDtos.map((dto) => this.translate(dto));

    return users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  translate(dto: UserDto) {
    const user = new User();
    const {
      id,
      username,
      password,
      name: { first, last },
    } = dto;

    user.id = id;
    user.username = username;
    user.password = password;

    const name = new Name();
    name.first = first;
    name.last = last;

    user.name = name;
    return user;
  }
}
