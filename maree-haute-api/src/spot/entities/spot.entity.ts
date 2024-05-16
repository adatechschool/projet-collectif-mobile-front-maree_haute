//Import the decorator functions from the typeorm library
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

// Define the Spot entity , for the spot table in the database
@Entity({ name: 'spot' })
export class Spot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Destination: string;

  @Column()
  Address?: string;

  @Column()
  Difficulty_Level: number;

  @Column('simple-array')
  Surf_Break: string[];

  @Column('json', { nullable: true })
  Photos?: { url: string }[];

  @Column()
  Peak_Surf_Season_Begins: Date;

  @Column()
  Peak_Surf_Season_Ends: Date;

  @Column()
  GPS?: string;

  @Column()
  Description: string;

  @ManyToOne(() => User, (user) => user.id)
  creator: User;

  // @Column()
  // Liked: boolean;
}
