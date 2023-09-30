import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCaregoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from 'src/database/entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORIES_REPOSITORY')
    private caregoryRepository: Repository<Category>,
  ) {}
  async create(CreateCategoryDto: CreateCategoryDto) {
    return await this.caregoryRepository.save(CreateCategoryDto);
  }

  async findAll() {
    return await this.caregoryRepository.find();
  }

  async findOne(id: number) {
    return await this.caregoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateCaregoryDto: UpdateCaregoryDto) {
    const caregory = await this.caregoryRepository.update(
      id,
      updateCaregoryDto,
    );
    return caregory;
  }

  async remove(id: number) {
    return await this.caregoryRepository.delete(id);
  }

  async findTasksByCategory(id: number) {
    return await this.caregoryRepository.findOne({
      where: {
        id: id,
      },
      relations: ['tasks'],
    });
  }
}
