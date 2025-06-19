import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { parse } from "path";

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value, 10); // Convert the string to an integer
        if(isNaN(val)) {
            throw new BadRequestException(`Validation failed: ${value} is not a valid number`);
        }
        if (val <= 0) {
            throw new BadRequestException(`Validation failed: ${value} must be a positive integer`);
        }
        return val; // Return the parsed integer
    }
}