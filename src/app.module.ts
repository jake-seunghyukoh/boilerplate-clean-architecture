import { ControllersModule } from '@Adapters/controllers/controllers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ControllersModule],
})
export class AppModule {}
