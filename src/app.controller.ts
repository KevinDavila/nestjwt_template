import { Controller, Request, Get, Post, UseGuards  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(AuthGuard('local'))
  @Get('api/getHello')
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/helloworld')
  getHelloWorld() {
   console.log("hello world")
  }   
}
