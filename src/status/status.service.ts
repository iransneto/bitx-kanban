import { Inject, Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Repository } from 'typeorm';
import { Status } from 'src/database/entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @Inject('STATUS_REPOSITORY')
    private readonly statusRepository: Repository<Status>,
  ) {}
  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    return await this.statusRepository.save(createStatusDto);
  }

  async findAll() {
    return await this.statusRepository.find({});
  }

  async findOne(id: number) {
    return await this.statusRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const status = await this.statusRepository.update(id, updateStatusDto);
    return status;
  }

  async remove(id: number) {
    return await this.statusRepository.delete(id);
  }
}
