import { RepositoriesModule } from '@Adapters/repositories/repositories.module';
import { UsersRepository } from '@Adapters/repositories/users.repository';
import { Module } from '@nestjs/common';
import { GetUsersInteractor } from '@UseCases/Interactors/users/getUsers.interactor';
import { AppController } from './app.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [RepositoriesModule],
  controllers: [AppController, UsersController],
  providers: [
    {
      provide: UsersController.GET_USERS_PORT,
      inject: [UsersRepository],
      useFactory: (usersRepository: UsersRepository) =>
        new GetUsersInteractor(usersRepository),
    },
  ],
})
export class ControllersModule {}
