import { EnvironmentService } from '@Adapters/config/environment/environment.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV !== 'production'
          ? ['.env.development.local', '.env.development']
          : ['.env.production.local', '.env.production'],
    }),
  ],
  providers: [EnvironmentService],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
