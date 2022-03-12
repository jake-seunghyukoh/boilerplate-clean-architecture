import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NameEntity } from './common/name.schema';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('varchar', { nullable: false, length: 32 })
  readonly username: string;

  @Column('varchar', { nullable: false, length: 256 })
  readonly password: string;

  @Column(() => NameEntity)
  readonly name: NameEntity;
}
