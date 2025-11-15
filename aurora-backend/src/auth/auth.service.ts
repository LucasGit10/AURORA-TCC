import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(loginDto: LoginAuthDto): Promise<{ access_token: string, user: any }> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    
    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos.');
    }

    const payload = { 
      email: user.email, 
      sub: user._id.toString(),
      name: user.name 
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }

  async register(registerDto: RegisterAuthDto): Promise<Omit<User, 'password'>> {
    try {
      const user = await this.userService.create(registerDto);
      
      const { password, ...result } = user;
      return result;

    } catch (error) {
      throw error;
    }
  }
}