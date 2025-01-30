import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceQuestService } from './resource-quest.service';
import { CreateResourceQuestDto } from './dto/create-resource-quest.dto';
import { UpdateResourceQuestDto } from './dto/update-resource-quest.dto';

@Controller('resource-quest')
export class ResourceQuestController {
  constructor(private readonly resourceQuestService: ResourceQuestService) {}

  @Post()
  create(@Body() createResourceQuestDto: CreateResourceQuestDto) {
    return this.resourceQuestService.create(createResourceQuestDto);
  }

  @Get()
  findAll() {
    return this.resourceQuestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceQuestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceQuestDto: UpdateResourceQuestDto) {
    return this.resourceQuestService.update(+id, updateResourceQuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceQuestService.remove(+id);
  }
}
