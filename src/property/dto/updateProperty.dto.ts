import { PartialType } from "@nestjs/mapped-types";
import { create } from "domain";
import { CreatePropertyDto } from "./createProperty.dto";

export class UpdatePropertyDto extends PartialType(CreatePropertyDto){}