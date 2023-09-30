import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Status } from './status.entity';
import { User } from './users.entity';
import { Comment } from './comments.entity';
import { Category } from './categories.entity';

@Entity('tasks')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: true })
  is_public: boolean;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'status_id' })
  status: Status;

  @OneToMany(() => Comment, (comment) => comment.id)
  comments: Comment[];

  @ManyToMany(() => Category, (category) => category.tasks)
  @JoinTable()
  categories: Category[];

  @Column({ type: 'date', nullable: true })
  end_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  created_by: User;

  @Column({ type: 'int', nullable: true })
  priority_level: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
