import { ResourceMonster } from 'src/resource-monster/entities/resource-monster.entity';
import { Resource } from 'src/resource/entities/resource.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  area: string;

  @Column()
  link: string;

  @OneToMany(
    () => ResourceMonster,
    (resourceMonster) => resourceMonster.monster,
  )
  resourceMonsters: ResourceMonster[];
}
