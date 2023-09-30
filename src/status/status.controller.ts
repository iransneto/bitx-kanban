import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createStatusDto: CreateStatusDto) {
    return await this.statusService.create(createStatusDto);
  }

  @Get()
  async findAll() {
    return await this.statusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    return await this.statusService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.statusService.remove(+id);
  }
}
