import { IsInt, IsPositive } from "class-validator";

export class IdParamDto {
    @IsInt({ message: 'ID must be an integer' })
    @IsPositive({ message: 'ID must be a positive integer' })
    id: number;
    }