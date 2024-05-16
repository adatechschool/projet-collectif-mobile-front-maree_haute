import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { List } from '../../list/entities/list.entity';
import { Spot } from 'src/spot/entities/Spot.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @ManyToOne(() => List, (list) => list.id)
  listId: number;
  @OneToMany(() => Spot, (spot) => spot.creator)
  spots: Spot[];
}
