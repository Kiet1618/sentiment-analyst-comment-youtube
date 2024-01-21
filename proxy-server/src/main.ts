import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin: "*", // Allow all domains
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    }
  );
  await app.listen(8080);
}
bootstrap();
