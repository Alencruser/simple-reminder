import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quest } from './entities/quest.entity';

@Module({
  controllers: [QuestController],
  providers: [QuestService],
  imports: [TypeOrmModule.forFeature([Quest])],
})
export class QuestModule {}
