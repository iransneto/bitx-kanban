import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';

import { statusRepository } from 'src/database/repositories/status.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [...statusRepository, StatusService],
})
export class StatusModule {}
