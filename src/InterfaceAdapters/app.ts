import { GetUsersInteractor } from '../Domain/UseCases/Interactors/users/getUsers.interactor';
import * as express from 'express';
import { Request, Response } from 'express';
import { GetUsersController } from './controllers/users/getUsers.controller';
import { UsersRepository } from './repositories/users.repository';

const app = express();
const port = 3000;

app.get('/', (_: Request, res: Response) => {
  res.send('ok');
});

app.get('/users', (req: Request, res: Response) =>
  new GetUsersController(new GetUsersInteractor(new UsersRepository())).execute(
    req,
    res,
  ),
);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
