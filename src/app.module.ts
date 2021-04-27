import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// decorator 함수. 익숙해져야함.
// 데코레이터는 클래스에 함수 기능을 추가할 수 있음.
@Module({
  imports: [],
  // controller는 기본적으로 url을 가져오고 함수를 실행시킴.
  controllers: [AppController],
  providers: [AppService],
})
// 데코레이터를 어느 곳에서도 쓸 수 있도록 export해줌.
export class AppModule {}
