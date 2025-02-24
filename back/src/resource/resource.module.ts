import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from './entities/resource.entity';

@Module({
  controllers: [ResourceController],
  providers: [ResourceService],
  imports: [TypeOrmModule.forFeature([Resource])],
})
export class ResourceModule {}
