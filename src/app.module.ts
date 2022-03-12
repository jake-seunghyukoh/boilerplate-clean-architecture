import { EnvironmentModule } from '@Adapters/config/environment/environment.module';
import { ControllersModule } from '@Adapters/controllers/controllers.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    EnvironmentModule,
    ControllersModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
  ],
})
export class AppModule {}
