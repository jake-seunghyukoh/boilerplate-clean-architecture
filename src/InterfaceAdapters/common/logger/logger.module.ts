import { LoggerService } from '@Adapters/common/logger/logger.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [LoggerService],
})
export class LoggerModule {}
