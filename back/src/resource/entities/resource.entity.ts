import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
