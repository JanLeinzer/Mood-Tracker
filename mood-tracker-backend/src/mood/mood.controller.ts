import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { MoodService } from './mood.service';
import { CreateMoodDto } from './dto/create-mood.dto';

@Controller('moods')
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Get()
  findAll() {
    return this.moodService.findAll();
  }

  @Post()
  create(@Body() createMoodDto: CreateMoodDto) {
    return this.moodService.create(createMoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moodService.remove(id);
  }
}