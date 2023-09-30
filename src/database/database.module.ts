import { Module } from '@nestjs/common';
import databaseProvider from './config/database.config';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
