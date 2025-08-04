import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow Angular Frontend to access backend
  app.enableCors({
    origin: 'http://localhost:4200',  // <-- Your Angular App URL
    credentials: true,  // <-- Optional (only if using cookies/auth)
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
