//Import the decorator functions from the typeorm library
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Define the Spot entity , for the spots table in the database
@Entity({ name: 'spots' })
export class Spot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Destination_State_Country: string;

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
  Geocode: string;

  @Column()
  Description: string;

  @Column()
  Liked: boolean;
}
