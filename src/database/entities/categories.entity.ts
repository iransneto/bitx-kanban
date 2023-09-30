import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { Task } from './tasks.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToMany(() => Task, (task) => task.categories)
  tasks: Task[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
