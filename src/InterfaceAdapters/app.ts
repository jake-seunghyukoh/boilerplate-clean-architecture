import { GetUsersInteractor } from '../Domain/UseCases/Interactors/users/getUsers.interactor';
import { UsersController } from './controllers/users/users.controller';
import { UsersRepository } from './repositories/users.repository';
import { HttpServer } from './server';

async function main() {
  const usersRepository = new UsersRepository();
  const getUsersInteractor = new GetUsersInteractor(usersRepository);
  const usersController = new UsersController(getUsersInteractor);

  const server = new HttpServer({ users: usersController });

  server.start(3000);
}

main();
