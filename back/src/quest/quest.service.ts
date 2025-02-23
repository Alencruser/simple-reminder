import { Injectable } from '@nestjs/common';
import { CreateQuestDto } from './dto/create-quest.dto';
import { UpdateQuestDto } from './dto/update-quest.dto';
import { Repository } from 'typeorm';
import { Quest } from './entities/quest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from 'src/resource/entities/resource.entity';

@Injectable()
export class QuestService {
  constructor(
    @InjectRepository(Quest)
    private questRepository: Repository<Quest>,
  ) {}

  create(createQuestDto: CreateQuestDto) {
    return 'This action adds a new quest';
  }

  findAll() {
    return `This action returns all quest`;
  }

  findOne(id: number) {
    return this.questRepository.findOne({
      where: { id },
      relations: ['resources'],
    });
  }

  update(id: number, updateQuestDto: UpdateQuestDto) {
    return `This action updates a #${id} quest`;
  }

  remove(id: number) {
    return `This action removes a #${id} quest`;
  }
}
