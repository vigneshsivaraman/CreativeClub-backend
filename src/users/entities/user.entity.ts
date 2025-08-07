import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable:true})
  username: string;

  @Column()
  email: string;

  @Column()
  password: string; // (you can hash later)
}
