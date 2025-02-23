import { Quest } from 'src/quest/entities/quest.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  level: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @ManyToMany(() => Quest, (quest) => quest.resources)
  @JoinTable({
    name: 'resource_quest',
    joinColumn: {
      name: 'id_resource',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_quest',
      referencedColumnName: 'id',
    },
  })
  quests: Quest[];
}
