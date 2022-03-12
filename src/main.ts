import { LoggingInterceptor } from '@Adapters/common/interceptors/logger.interceptors';
import { LoggerService } from '@Adapters/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(new ValidationPipe());

  // Interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));

  await app.listen(3000);
}
bootstrap();
