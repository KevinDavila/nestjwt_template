import { AuthService } from './../auth/auth.service';
import { Controller, Request, Get, Post, UseGuards  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('api')
export class CyberpuertaController {
    constructor(private authService: AuthService){}
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req){
        return this.authService.login(req.user)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('products/getHello')
    getHello() {
     console.log("hello")
    }    
}
