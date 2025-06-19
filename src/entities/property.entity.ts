import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from "./propertyFeature.entity";
import { User } from "./user.entity";

@Entity()
export class Property{
    @PrimaryGeneratedColumn() /// This will auto-generate the id
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column({default: 0}) /// This will set the default value to 0 if not provided
    price: number;

    @OneToOne(
        ()=>PropertyFeature, 
        (PropertyFeature) => PropertyFeature.property,
        { cascade: true } 
    )
    propertyFeature: PropertyFeature;

    @ManyToOne(()=>User, (user) => user.properties) // This will create a many-to-one relationship with the User entity
    @JoinColumn({name: 'userId'}) // This will create a foreign key in the Property table
    user: User

    @ManyToMany(()=>User, (user) => user.likedProperties) // This will create a many-to-many relationship with the User entity
    likedBy: User[]; // This will create a many-to-many relationship with the User entity
}