import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

const prefix = '/v1'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  app.use(morgan('tiny'))
  app.use(cookieParser())

  await app.listen(8080).then(async () => {
    console.log(`⚡ Server ready at ${await app.getUrl()}${prefix}`)
  });
}

bootstrap();
