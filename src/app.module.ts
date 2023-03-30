import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import 'dotenv/config'

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
