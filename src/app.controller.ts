import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './model/create-cat.dto'
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private catsService: CatsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get('/teste/:id')
  findOne2(@Param('id') id): string {
    return `This action returns a teste #${id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto.name);
    return 'This action adds a new cat';
  }


}
