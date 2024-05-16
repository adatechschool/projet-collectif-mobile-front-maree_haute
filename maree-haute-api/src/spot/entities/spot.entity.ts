//Import the decorator functions from the typeorm library
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { List } from 'src/list/entities/list.entity';

// Define the Spot entity , for the spot table in the database
@Entity({ name: 'spot' })
export class Spot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destination: string;

  @Column()
  address?: string;

  @Column()
  difficulty_Level: number;

  @Column('simple-array')
  surf_Break: string[];

  @Column('json', { nullable: true })
  photos?: { url: string }[];

  @Column()
  peak_Surf_Season_Begins: number;

  @Column()
  peak_Surf_Season_Ends: number;

  @Column()
  GPS?: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.id)
  creator?: User;

  @ManyToOne(() => List, (list) => list.id)
  list?: List;
  // @Column()
  // Liked: boolean;
}
