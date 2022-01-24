import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1');
  await app.listen(8080).then(async () => {
    console.log(`⚡ Server ready at ${await app.getUrl()}/api/v1`)
  });
}
bootstrap();
