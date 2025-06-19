import { IsInt, IsString, Length } from "class-validator";

export class CreatePropertyDto {
@IsString({always: true})
@Length(5, 50, {message: 'Name must be between 5 and 50 characters long',})
  name: string;
@IsString()
@Length(5, 200, {groups: ['create', 'update']})
  description: string;
@IsInt({always: true})
  price: number; 
}