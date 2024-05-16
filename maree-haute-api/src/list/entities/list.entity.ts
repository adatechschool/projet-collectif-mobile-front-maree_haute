import { User } from 'src/user/entities/user.entity';
import { Spot } from 'src/spot/entities/spot.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.id)
  creator: number;
}
