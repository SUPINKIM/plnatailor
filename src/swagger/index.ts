import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const setSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Plantailor API')
        .setDescription('플랜테일러 API 문서입니다.')
        .setVersion('1.0')
        .addTag('plantailor')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
};

export default setSwagger;
