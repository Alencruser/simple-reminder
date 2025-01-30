import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MonsterModule } from './monster/monster.module';
import { ResourceModule } from './resource/resource.module';
import { QuestModule } from './quest/quest.module';
import { FamilyModule } from './family/family.module';
import { ResourceQuestModule } from './resource-quest/resource-quest.module';

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
      entities: [],
    }),
    MonsterModule,
    ResourceModule,
    QuestModule,
    FamilyModule,
    ResourceQuestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
