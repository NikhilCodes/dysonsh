import {
  Controller,
  Get,
  Post,
  Body,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service'
import { UsersService } from '../users/users.service'
import { Public } from '../../guards/jwt-auth.guard'


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('status')
  async status(@Request() req) {
    let { passkey, ...data } = (await this.usersService.findById(req.user.id))?.toJSON()
    return data
  }

  @Public()
  @Post('login')
  async login(@Body() body) {
    return this.authService.login({
      email: body.email,
      passkey: body.passkey,
    });
  }

  @Public()
  @Post('signup')
  async signup(@Body() body) {
    return this.authService.signup({
      email: body.email,
      passkey: body.passkey,
    });
  }
}
