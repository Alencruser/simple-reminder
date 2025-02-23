import { Resource } from 'src/resource/entities/resource.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @ManyToMany(() => Resource, (resource) => resource.quests)
  resources: Resource[];
}
