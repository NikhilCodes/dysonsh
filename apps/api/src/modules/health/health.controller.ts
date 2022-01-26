import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, Public } from '../../guards/jwt-auth.guard'

@Public()
@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(200)
  check() {
    return {
      status: 'ok',
      time: Date.now(),
    }
  }
}
