import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomersService } from '../customers/customers.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Customer, CustomerSchema } from '../customers/entities/customer.entity'
import { CustomersModule } from '../customers/customers.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { authEnv } from 'config/env.dev.js'
import { JwtStrategy } from './jwt.strategy'
// import { LocalStrategy } from './local.strategy'

@Module({
  imports: [
    CustomersModule,
    PassportModule,
    JwtModule.register({
      secret: authEnv.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
      }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
