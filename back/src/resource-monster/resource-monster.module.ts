import { Module } from '@nestjs/common';
import { ResourceMonsterService } from './resource-monster.service';
import { ResourceMonsterController } from './resource-monster.controller';
import { ResourceMonster } from './entities/resource-monster.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ResourceMonsterController],
  providers: [ResourceMonsterService],
  imports: [TypeOrmModule.forFeature([ResourceMonster])],
})
export class ResourceMonsterModule {}
