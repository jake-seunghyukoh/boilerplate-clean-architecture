import { GetUsersOutputModel } from '@UseCases/Models/users/getUsersOutput.model';
import { UseCasePortWithoutInput } from '@UseCases/Ports/useCasePort';

interface ControllerRequest {
  body: Record<string, unknown>;
}

interface ControllerResponse {
  data?: Record<string, any>;
}

export class UsersController {
  constructor(
    private readonly getUsersPort: UseCasePortWithoutInput<
      Promise<GetUsersOutputModel[]>
    >,
  ) {}

  async getUsers({ body }: ControllerRequest): Promise<ControllerResponse> {
    const users = await this.getUsersPort.execute();

    return { data: users };
  }
}
