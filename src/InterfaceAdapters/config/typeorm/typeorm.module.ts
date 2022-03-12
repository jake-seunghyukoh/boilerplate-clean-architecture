import { EnvironmentConfigModule } from '@Adapters/config/environment/environment.module';
import { EnvironmentConfigService } from '@Adapters/config/environment/environment.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + config.getDatabaseEntities()],
    synchronize: config.getDatabaseSync(),
  } as TypeOrmModuleOptions;
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeormConfigModule {}
