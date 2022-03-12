import { Users } from '@UseCases/DataGateways/users.gateway';
import { GetUsersOutputModel } from '@UseCases/Models/users/getUsersOutput.model';
import { UseCasePortWithoutInput } from '@UseCases/Ports/useCasePort';

export class GetUsersInteractor
  implements UseCasePortWithoutInput<Promise<GetUsersOutputModel[]>>
{
  constructor(private readonly usersDataGateway: Users) {}

  async execute(): Promise<GetUsersOutputModel[]> {
    const users = await this.usersDataGateway.findAll();

    return users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }
}
