import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import passport from 'passport'
import { CustomersService } from '../customers/customers.service'
import { Public } from '../../guards/jwt-auth.guard'


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly customersService: CustomersService,
  ) {}

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
