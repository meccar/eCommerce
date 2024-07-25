import { Module } from "@nestjs/common";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { MongooseModule, MongooseModuleOptions } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): MongooseModuleOptions =>
        ({
          uri: configService.get<string>("MONGODB_URI"),
        }) as MongooseModuleOptions,
      inject: [ConfigService],
    }),
  ],
})
export class DBModule {}
