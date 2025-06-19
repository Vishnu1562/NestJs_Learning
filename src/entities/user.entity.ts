import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    avatarUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(()=>Property, (property) => property.user,)
    properties: Property[];

    @ManyToMany(()=>Property,(Property) => Property.likedBy)
    @JoinTable({name: 'user_liked_properties'}) // This will create a join table for the many-to-many relationship
    likedProperties: Property[];
}