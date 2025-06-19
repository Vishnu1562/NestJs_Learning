import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class PropertyFeature{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bedrooms: number;
    @Column()
    bathrooms: number;
    @Column()
    parkingSpots: number;
    @Column()
    area: number;
    @Column()
    hasBalcony: boolean;
    @Column()
    hasGarden: boolean;
    @Column()
    hasSwimmingPool: boolean;

    @OneToOne(()=>Property, (property) => property.propertyFeature) // This will create a one-to-one relationship with the Property entity
    @JoinColumn() // This will create a foreign key in the PropertyFeature table
    property: Property;
}