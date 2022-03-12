import { EnvironmentModule } from '@Adapters/config/environment/environment.module';
import { TypeormConfigModule } from '@Adapters/config/typeorm/typeorm.module';
import { ControllersModule } from '@Adapters/controllers/controllers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentModule, ControllersModule, TypeormConfigModule],
})
export class AppModule {}
