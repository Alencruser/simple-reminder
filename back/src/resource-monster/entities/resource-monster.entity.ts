import { Monster } from 'src/monster/entities/monster.entity';
import { Resource } from 'src/resource/entities/resource.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'resource_monster' })
export class ResourceMonster {
  @PrimaryColumn()
  id_monster: number;

  @PrimaryColumn()
  id_resource: number;

  @ManyToOne(() => Monster, (monster) => monster.resourceMonsters)
  @JoinColumn({ name: 'id_monster' })
  monster: Monster;

  @ManyToOne(() => Resource, (resource) => resource.resourceMonsters)
  @JoinColumn({ name: 'id_resource' })
  resource: Resource;

  @Column()
  drop_percentage: number;
}
