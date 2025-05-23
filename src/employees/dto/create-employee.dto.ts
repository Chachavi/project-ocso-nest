import { IsEmail, IsString, MaxLength } from "class-validator";
import { UUID } from "crypto";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(30)
    name: string;
    @IsString()
    @MaxLength(70)
    lastName: string;
    @IsString()
    @MaxLength(10)
    phoneNumber: string;
    @IsEmail()
    @IsString()
    email: string;
}
