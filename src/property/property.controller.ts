import { Body, Controller, Delete, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { log } from 'console';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {

    constructor(private propertyService: PropertyService) {}

    @Get()
    getProperty() {
        var value = this.propertyService.getProperty();
        return value;
    }

    // @Post()
    // createProperty(): string {
    //     return 'Property created successfully';
    // }

    // @Get(':id')
    // getPropertyById(@Param('id', ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort) {
    //     console.log(typeof id);
    //     console.log(typeof sort);
    //     return  `Property ID: ${id}, Sort: ${sort}`;
    // }
    // @Get(':id/:name')
    // getId(@Param('id') id, @Param('name') name) {
    //     return `id: ${id}, name: ${name}`;
    // }

    @Post("create")
    // @UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) /// This will validate the body against the CreatePropertyDto and remove extra body values not in body
    create(@Body(new ValidationPipe({
        whitelist: true, 
        forbidNonWhitelisted: true,
        groups: ['create'], // This will only validate the properties in the create group
    }))
     body: CreatePropertyDto) {
        return this.propertyService.CreateProperty(body);
    }

    @Post("update")
    Update(@Body(
    //     new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     groups: ['update'], // This will only validate the properties in the update group))
    // })
)
    body: CreatePropertyDto) {
        return body
    }

    @Patch(':id')
    updateid(
        @Param("id", ParseIdPipe) id,
        @Body() body: UpdatePropertyDto, // This will validate the body against the UpdatePropertyDto
        // @RequestHeader(new ValidationPipe({whitelist: true, validateCustomDecorators:true})) header: HeadersDto
    ) {
        return this.propertyService.update(id, body);
    }

    @Get(':id')
    findOne(@Param('id', ParseIdPipe) id: number){
        return this.propertyService.findOne(id);
    }

    @Get('all')
    findAll(@Query() paginationDTO: PaginationDto) {
        return this.propertyService.findAll(paginationDTO);
    }

    @Delete(':id')
    deleteProperty(@Param('id', ParseIdPipe) id: number) {
        return this.propertyService.delete(id);
    }
}
