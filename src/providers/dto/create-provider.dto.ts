import { IsString, MaxLength, IsEmail, IsOptional } from "class-validator";
import { Provider } from "../entities/provider.entity"

export class CreateProviderDto extends Provider {
    @IsString()
    @MaxLength(100)
    providerName: string;
    @IsEmail()
    @IsString()
    providerEmail: string;
    @IsString()
    @MaxLength(10)
    @IsOptional()
    providerPhoneNumber: string;
}
