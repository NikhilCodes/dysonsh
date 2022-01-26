import {
  ExecutionContext,
  Injectable, SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core'
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql'
import { HttpArgumentsHost } from '@nestjs/common/interfaces'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    if (context.getType<GqlContextType>() === 'graphql') {
      const _ctx = GqlExecutionContext.create(context).getContext()
      context.switchToHttp = () => {
        return {
          getNext<T = any>(): T {
            return undefined;
          }, getResponse<T = any>(): T {
            return undefined;
          }, getRequest<T = any>(): T {
            return _ctx.req;
          },
        }
      }
    }

    // console.log(context.switchToHttp().getRequest().cookies)

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler?.(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}

export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
