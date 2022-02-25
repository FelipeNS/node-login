import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  token: string;
}