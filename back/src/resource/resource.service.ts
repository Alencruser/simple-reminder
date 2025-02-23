import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from './entities/resource.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}
  create(createResourceDto: CreateResourceDto) {
    return 'This action adds a new resource';
  }

  findAll() {
    return `This action returns all resource`;
  }

  findOne(id: number) {
    return this.resourceRepository.findOne({
      where: { id },
      relations: ['quests'],
    });
  }

  update(id: number, updateResourceDto: UpdateResourceDto) {
    return `This action updates a #${id} resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} resource`;
  }
}
