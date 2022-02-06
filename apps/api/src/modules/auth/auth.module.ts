import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../users/entities/user.entity'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { authEnv } from 'config/env.dev.js'
import { JwtStrategy } from './jwt.strategy'
// import { LocalStrategy } from './local.strategy'

@Module({
  imports: [
    UsersModule,
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
