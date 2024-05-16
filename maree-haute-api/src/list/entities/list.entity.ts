import { Spot } from 'src/spot/entities/Spot.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id)
  user_id: number;

  @Column()
  name: string;

  @OneToMany(() => Spot, (spot) => spot.list)
  spots: Spot[];
}
