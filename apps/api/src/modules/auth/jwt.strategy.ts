import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { authEnv } from 'config/env.dev.js';
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { AuthService } from './auth.service'
import { CustomersService } from '../customers/customers.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private customerService: CustomersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authEnv.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(request, payload: any) {
    const exists = await this.customerService.findOne({ email: payload?.['email'] })
    if (exists) {
      return payload;
    } else {
      return false
    }
  }
}
