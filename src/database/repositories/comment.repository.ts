import { DataSource } from 'typeorm';
import { Comment } from '../entities/comments.entity';

export const commentsRepository = [
  {
    provide: 'COMMENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Comment),
    inject: ['DATA_SOURCE'],
  },
];
