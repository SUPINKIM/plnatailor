import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import setSwagger from './swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['warn', 'error', 'log'],
    });
    // setSwagger(app);

    await app.listen(3000);
}
bootstrap();
