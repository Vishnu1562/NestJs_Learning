import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Property } from 'src/entities/property.entity';
import { Not, Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';

@Injectable()
export class PropertyService {

    constructor(@InjectRepository(Property) private propertyRepo: Repository<Property>) {}

    getProperty(): string {
        return 'Property Service is working';
    }

   async CreateProperty(dto:CreatePropertyDto){
    return await this.propertyRepo.save(dto); // This will save the property to the database
    }

    async findOne(id: number){
        const property = await this.propertyRepo.findOne({
            where: {id: id}
        })
        if (!property) {
            throw new NotFoundException(`Property with ID ${id} not found`);
        }
        return property;
    }

    async findAll(paginationDTO: PaginationDto) {
        return await this.propertyRepo.find({
            skip: paginationDTO.skip,
            take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE,
        }); /// This will return all properties from the database
    }

    async update(id: number, dto: UpdatePropertyDto){
        return await this.propertyRepo.update({id}, dto)
    }

    async delete(id: number) {
        const result = await this.propertyRepo.delete({id});
        if (result.affected === 0) {
            throw new NotFoundException(`Property with ID ${id} not found`);
        }
        return { message: `Property with ID ${id} deleted successfully` };
    }
}
