/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ArticleModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
        "mongodb+srv://haythemkaouech:dkRg4zopYwldpR4Y@cluster0.0se0jln.mongodb.net/test?retryWrites=true&w=majority"
    ),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
