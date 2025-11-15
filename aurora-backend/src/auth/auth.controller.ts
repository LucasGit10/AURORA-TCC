import { Controller, Post, Body, Res, Get, UseGuards, Req } from '@nestjs/common';
import { type Response } from 'express';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginAuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { access_token, user } = await this.authService.login(loginDto);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(Date.now() + 3600000), 
    });

    return { user };
  }

  @Post('register')
  async register(
    @Body() registerDto: RegisterAuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {

    const newUser = await this.authService.register(registerDto);

    const { access_token, user } = await this.authService.login({
      email: registerDto.email,
      password: registerDto.password,
    });
    
    response.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(Date.now() + 3600000),
    });

    return { user };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
    return { message: 'Logout bem-sucedido' };
  }

  // @Get('profile')
  // @UseGuards(JwtAuthGuard)
  // getProfile(@Req() req: Request) {
  //   return req.user;
  // }
}