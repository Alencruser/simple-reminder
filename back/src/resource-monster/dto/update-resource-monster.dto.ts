import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceMonsterDto } from './create-resource-monster.dto';

export class UpdateResourceMonsterDto extends PartialType(CreateResourceMonsterDto) {}
