import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //const PORT = process.env.PORT || 5000;
  //await app.listen(PORT);
}
bootstrap();
