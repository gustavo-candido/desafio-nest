import { 
    Entity,
    PrimaryGeneratedColumn,
    Column
 } from 'typeorm';

 
@Entity('category')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
