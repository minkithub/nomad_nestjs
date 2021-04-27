// 결과적으로 service에 있는 함수를 호출하는게 목표. service에서 실질적인 함수를 가지고 있음.

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'Hi Nestjs'
  }
}
