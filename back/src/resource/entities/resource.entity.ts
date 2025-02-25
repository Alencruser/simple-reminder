import { Monster } from 'src/monster/entities/monster.entity';
import { Quest } from 'src/quest/entities/quest.entity';
import { ResourceMonster } from 'src/resource-monster/entities/resource-monster.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
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

  // Many to many only allows me to join an entity, can't retrieve an additional column in the associative table
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

  // Third entity allows me to get the extra column, in this case : drop_percentage
  @OneToMany(
    () => ResourceMonster,
    (resourceMonster) => resourceMonster.resource,
  )
  resourceMonsters: ResourceMonster[];
}
