import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/health')
  getHealth(): { status: string; app: string } {
    return { status: 'ok', app: 'nayara-rebrand' };
  }
}