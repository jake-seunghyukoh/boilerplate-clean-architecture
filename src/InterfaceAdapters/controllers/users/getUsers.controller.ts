import { GetUsersOutputModel } from '@UseCases/Models/users/getUsersOutput.model';
import { UseCasePortWithoutInput } from '@UseCases/Ports/useCasePort';
import { Request, Response } from 'express';

export class GetUsersController {
  constructor(
    private readonly getUsersPort: UseCasePortWithoutInput<
      Promise<GetUsersOutputModel[]>
    >,
  ) {}

  async execute(req: Request, res: Response) {
    const users = await this.getUsersPort.execute();

    res.send(users);
  }
}
