import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { roleRepository } from 'src/database/repositories/role.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],

  controllers: [RolesController],
  providers: [...roleRepository, RolesService],
})
export class RolesModule {}
