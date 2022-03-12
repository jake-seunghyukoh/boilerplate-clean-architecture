import { Column } from 'typeorm';

export class NameEntity {
  @Column()
  first: string;

  @Column()
  last: string;
}
