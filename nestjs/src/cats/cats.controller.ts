import {
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter) // 클래스 전체에 적용
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter) // 개별로 적용
  getAllCats() {
    console.log('hello controller');

    return 'all cat';
  }

  @Get(':id')
  getCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);

    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put('id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
