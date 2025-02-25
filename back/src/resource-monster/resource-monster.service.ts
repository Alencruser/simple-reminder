import { Injectable } from '@nestjs/common';
import { CreateResourceMonsterDto } from './dto/create-resource-monster.dto';
import { UpdateResourceMonsterDto } from './dto/update-resource-monster.dto';

@Injectable()
export class ResourceMonsterService {
  create(createResourceMonsterDto: CreateResourceMonsterDto) {
    return 'This action adds a new resourceMonster';
  }

  findAll() {
    return `This action returns all resourceMonster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourceMonster`;
  }

  update(id: number, updateResourceMonsterDto: UpdateResourceMonsterDto) {
    return `This action updates a #${id} resourceMonster`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourceMonster`;
  }
}
