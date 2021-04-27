import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controller : url을 가져와서 함수로 mapping해줌.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 데코레이터 함수.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 사람들이 /hello라고 접근을 하면 즉 https"//localhost:3000/hello 로 접근을 하면
  // Hello everyone을 보여주라는 뜻.
  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }

  // service에 함수를 넣어서 호출하는게 nestjs의 아키텍처
  @Get('/hi')
  sayHi(): string {
    return this.appService.getHi();
  }
}
