import { Injectable } from '@nestjs/common';
import { CreateResourceQuestDto } from './dto/create-resource-quest.dto';
import { UpdateResourceQuestDto } from './dto/update-resource-quest.dto';

@Injectable()
export class ResourceQuestService {
  create(createResourceQuestDto: CreateResourceQuestDto) {
    return 'This action adds a new resourceQuest';
  }

  findAll() {
    return `This action returns all resourceQuest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourceQuest`;
  }

  update(id: number, updateResourceQuestDto: UpdateResourceQuestDto) {
    return `This action updates a #${id} resourceQuest`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourceQuest`;
  }
}
