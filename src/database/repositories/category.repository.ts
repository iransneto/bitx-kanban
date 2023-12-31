import { DataSource } from 'typeorm';
import { Category } from '../entities/categories.entity';

export const categoryRepository = [
  {
    provide: 'CATEGORIES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];
