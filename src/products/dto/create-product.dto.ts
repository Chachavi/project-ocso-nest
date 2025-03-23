import { IsNumber, IsOptional, IsString, IsUUID, MaxLength, IsInt } from "class-validator";
import { Product } from "../entities/product.entity";
import { Provider } from "src/providers/entities/provider.entity";

export class CreateProductDto extends Product {
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
    @IsUUID('4')
    provider: Provider;
}
