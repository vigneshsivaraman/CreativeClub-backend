import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable:true})
  username: string;

  @Column()
  email: string;

  @Column()
  password: string; // (you can hash later)
}
