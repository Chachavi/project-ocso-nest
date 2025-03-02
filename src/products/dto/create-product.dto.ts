import { IsNumber, IsOptional, IsString, IsUUID, MaxLength, IsInt } from "class-validator";

export class CreateProductDto {
    @IsUUID('4')
    @IsOptional()
    productId: string;
    @IsString()
    @MaxLength(40)
    productName: string;
    @IsNumber()
    price: number;
    @IsInt()
    countSeal: number;
    @IsOptional()
    @IsString()
    @IsUUID()
    provider: string
}
