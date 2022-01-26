import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service'
import { JwtService } from '@nestjs/jwt'
import { LoginCustomerInput } from '../customers/dto/create-customer.input'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private customersService: CustomersService,
    private jwtService: JwtService,
  ) {}

  async login(user: LoginCustomerInput) {
    const exists = await this.customersService.findOne({ email: user.email })
    const validPassword = await bcrypt.compare(user.passkey, exists?.passkey);

    if (exists && validPassword) {
      const payload = { email: user.email, sub: exists.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }

  async signup(user: LoginCustomerInput) {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds)
    user.passkey = await bcrypt.hash(user.passkey, salt)

    let { passkey, ...data } = (await this.customersService.createIfNotExists({
      email: user.email,
      passkey: user.passkey,
    })).toJSON();

    return {
      ...data
    }
  }

  // async validateJwt()
}
