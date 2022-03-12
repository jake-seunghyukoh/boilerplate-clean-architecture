import { Controller, Get, Inject } from '@nestjs/common';
import { GetUsersOutputModel } from '@UseCases/Models/users/getUsersOutput.model';
import { UseCasePortWithoutInput } from '@UseCases/Ports/useCasePort';

@Controller('users')
export class UsersController {
  static GET_USERS_PORT = 'getUsersPort';

  constructor(
    @Inject(UsersController.GET_USERS_PORT)
    private readonly getUsersPort: UseCasePortWithoutInput<
      Promise<GetUsersOutputModel[]>
    >,
  ) {}

  @Get()
  async getUsers() {
    const users = await this.getUsersPort.execute();

    return { data: users };
  }
}
