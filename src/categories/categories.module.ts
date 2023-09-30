import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { DatabaseModule } from 'src/database/database.module';
import { categoryRepository } from 'src/database/repositories/category.repository';

@Module({
  imports: [DatabaseModule],

  controllers: [CategoriesController],
  providers: [...categoryRepository, CategoriesService],
})
export class CategoriesModule {}
