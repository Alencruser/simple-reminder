import { Module } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monster } from './entities/monster.entity';

@Module({
  controllers: [MonsterController],
  providers: [MonsterService],
  imports: [TypeOrmModule.forFeature([Monster])],
})
export class MonsterModule {}
