import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from 'src/database/entities/tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.update(id, updateTaskDto);
    return task;
  }

  async remove(id: number) {
    return await this.taskRepository.delete(id);
  }

  async findByCategory(categoryId: number) {
    return await this.taskRepository
      .createQueryBuilder('task')
      .innerJoin('task.categories', 'category')
      .where('category.id = :categoryId', { categoryId })
      .getMany();
  }

  findByStatus(statusId: number) {
    return `This action returns all tasks with status id ${statusId}`;
  }
}
