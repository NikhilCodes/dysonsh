import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class WebhookGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlExecCtx = GqlExecutionContext.create(context)
    return gqlExecCtx.getContext().req.headers['x-webhook-key'] === process.env.WEBHOOK_KEY;
  }
}
