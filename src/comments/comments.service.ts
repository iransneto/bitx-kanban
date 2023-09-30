import { Inject, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from 'src/database/entities/comments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENTS_REPOSITORY')
    private readonly commentRepository: Repository<Comment>,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    return await this.commentRepository.save(createCommentDto);
  }

  async findAll() {
    return await this.commentRepository.find();
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await this.commentRepository.delete(id);
  }
}
