import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto){
  return this.authService.registerUser(createUserDto)
    }
  @Post("login")
  login(@Body() createUserDto: CreateUserDto){
  return this.authService.loginUser(createUserDto)
  }
}
