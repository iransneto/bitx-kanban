import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { taskRepository } from 'src/database/repositories/task.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [...taskRepository, TasksService],
})
export class TasksModule {}
