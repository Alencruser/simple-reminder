import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FamilyModule } from './family/family.module';
import { MonsterModule } from './monster/monster.module';
import { QuestModule } from './quest/quest.module';
import { ResourceModule } from './resource/resource.module';
import { Quest } from './quest/entities/quest.entity';
import { Resource } from './resource/entities/resource.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Quest, Resource],
    }),
    MonsterModule,
    ResourceModule,
    QuestModule,
    FamilyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
