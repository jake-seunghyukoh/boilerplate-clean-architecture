import { LoggerService } from '@Adapters/logger/logger.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [LoggerService],
})
export class LoggerModule {}
