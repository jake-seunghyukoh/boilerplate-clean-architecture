import { AllExceptionsFilter } from '@Adapters/common/filters/exceptions.filter';
import { LoggingInterceptor } from '@Adapters/common/interceptors/logger.interceptors';
import { ResponseInterceptor } from '@Adapters/common/interceptors/response.interceptor';
import { LoggerService } from '@Adapters/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(new ValidationPipe());

  // Filters
  app.useGlobalFilters(new AllExceptionsFilter(new LoggerService()));

  // Interceptors
  app.useGlobalInterceptors(
    new LoggingInterceptor(new LoggerService()),
    new ResponseInterceptor(),
  );

  await app.listen(3000);
}
bootstrap();
