import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceMonsterService } from './resource-monster.service';
import { CreateResourceMonsterDto } from './dto/create-resource-monster.dto';
import { UpdateResourceMonsterDto } from './dto/update-resource-monster.dto';

@Controller('resource-monster')
export class ResourceMonsterController {
  constructor(private readonly resourceMonsterService: ResourceMonsterService) {}

  @Post()
  create(@Body() createResourceMonsterDto: CreateResourceMonsterDto) {
    return this.resourceMonsterService.create(createResourceMonsterDto);
  }

  @Get()
  findAll() {
    return this.resourceMonsterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceMonsterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceMonsterDto: UpdateResourceMonsterDto) {
    return this.resourceMonsterService.update(+id, updateResourceMonsterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceMonsterService.remove(+id);
  }
}
