import {Body, Controller, Post, UseFilters} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {ApplicationServiceURL} from './app.config';
import {CreateUserDto} from './dto/users/create-user.dto';
import {LoginUserDto} from './dto/users/login-user.dto';
import {AxiosExceptionFilter} from './filters/axios-exception.filter';

@Controller('users')
@UseFilters(AxiosExceptionFilter)
export class UsersController {
  constructor(
    private readonly httpService: HttpService
  ) {}

  @Post('register')
  public async createUser(@Body() dto: CreateUserDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/register`, dto);
    return data;
  }

  @Post('login')
  public async loginUser(@Body() dto: LoginUserDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/login`, dto);
    return data;
  }

  @Post('refresh')
  public async refreshToken(@Body() dto: CreateUserDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Users}/refresh`, dto);
    return data;
  }
}
