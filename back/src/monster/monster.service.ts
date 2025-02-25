import { Injectable } from '@nestjs/common';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';
import { Repository } from 'typeorm';
import { Monster } from './entities/monster.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MonsterService {
  constructor(
    @InjectRepository(Monster)
    private monsterRepository: Repository<Monster>,
  ) {}

  create(createMonsterDto: CreateMonsterDto) {
    return 'This action adds a new monster';
  }

  findAll() {
    return `This action returns all monster`;
  }

  findOne(id: number) {
    return this.monsterRepository.findOne({
      where: { id },
      relations: ['resourceMonsters', 'resourceMonsters.resource'],
    });
  }

  update(id: number, updateMonsterDto: UpdateMonsterDto) {
    return `This action updates a #${id} monster`;
  }

  remove(id: number) {
    return `This action removes a #${id} monster`;
  }
}
