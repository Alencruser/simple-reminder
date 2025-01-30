import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceQuestDto } from './create-resource-quest.dto';

export class UpdateResourceQuestDto extends PartialType(CreateResourceQuestDto) {}
