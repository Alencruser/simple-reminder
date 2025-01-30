import { Module } from '@nestjs/common';
import { ResourceQuestService } from './resource-quest.service';
import { ResourceQuestController } from './resource-quest.controller';

@Module({
  controllers: [ResourceQuestController],
  providers: [ResourceQuestService],
})
export class ResourceQuestModule {}
