import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import { create } from "domain";

export const RequestHeader = createParamDecorator(async(targetDTo:any,ctx:ExecutionContext)=>{
    const request = ctx.switchToHttp().getRequest();
    const headers = request.headers;
    // You can return the entire headers object or specific headers as needed

    const dto = plainToInstance(targetDTo, headers, {
        excludeExtraneousValues: true, // This will only include properties that are decorated with @Expose)
    })

    await validateOrReject(dto);
    return dto; // or return headers['your-header-name'] for a specific header
})