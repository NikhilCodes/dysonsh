import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { LoginUserInput } from '../users/dto/create-user.input'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: LoginUserInput) {
    const exists = await this.usersService.findOne({ email: user.email })
    const validPassword = await bcrypt.compare(user.passkey, exists?.passkey);

    if (exists && validPassword) {
      const payload = { id: exists.id, sub: exists.email };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }

  async signup(user: LoginUserInput) {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds)
    user.passkey = await bcrypt.hash(user.passkey, salt)

    let { passkey, ...data } = (await this.usersService.createIfNotExists({
      email: user.email,
      passkey: user.passkey,
    })).toJSON();

    return {
      ...data
    }
  }

  // async validateJwt()
}
