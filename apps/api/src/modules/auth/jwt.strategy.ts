import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { authEnv } from 'config/env.dev.js';
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { AuthService } from './auth.service'
import { UsersService } from '../users/users.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authEnv.JWT_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(request, payload: any) {
    const exists = await this.userService.findById(payload.id)
    request.user = exists;

    if (exists) {
      return payload;
    } else {
      return false
    }
  }
}
