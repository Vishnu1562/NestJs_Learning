import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';
import { PropertyService } from './property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Property])], // This will import the Property entity to the module
  controllers: [PropertyController],
  providers: [
    { /// This is a global pipe that will apply to all controllers in the property module
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true, // This will remove properties that are not in the DTO
      forbidNonWhitelisted: true, // This will throw an error if there are properties that are not in the DTO
      skipMissingProperties: true,
      transform: true, // This will transform the body to the DTO type
      transformOptions: {
        enableImplicitConversion: true, // This will allow implicit conversion of types, e.g. string to number
  }
}),
  }, PropertyService],
})
export class PropertyModule {}
