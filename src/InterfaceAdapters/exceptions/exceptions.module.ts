import { ExceptionsService } from '@Adapters/exceptions/exceptions.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ExceptionsService],
})
export class ExceptionsModule {}
