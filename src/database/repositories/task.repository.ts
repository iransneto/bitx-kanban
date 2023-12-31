import { DataSource } from 'typeorm';
import { Task } from '../entities/tasks.entity';

export const taskRepository = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: ['DATA_SOURCE'],
  },
];
