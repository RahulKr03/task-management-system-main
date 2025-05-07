/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import type { MongooseModuleOptions } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService
      ): Promise<MongooseModuleOptions> => {
        const uri = configService.get<string>('MONGODB_URI');
        if (!uri) {
          throw new Error('MONGODB_URI is not defined in .env');
        }

        return {
          uri,
          // Optional legacy options
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as unknown as MongooseModuleOptions;
      },
    }),
    TaskModule,
  ],
})
export class AppModule {}
